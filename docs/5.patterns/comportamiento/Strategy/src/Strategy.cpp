
// Algorithms retrieved from 
// https://gist.github.com/evangilo/a6d0e7a5f6d7726d9660

#include <iostream>
#include <cstdlib>
#include <stdio.h>
#include <string>
#include <vector>
#include <sys/time.h>

// These definitions converts microseconds...
#define TO_MINUTE_FORMULA 1*10*10*10*10*10*10*10
#define TO_SECONDS_FORMULA 1*10*10*10*10*10*10

using namespace std;

// Method prototypes - documentation in declarations
// void SingleTest(SortAlgorithm, int, int);
int *RandomArray(int, int);
double PrintTimeDiff(timeval, timeval);

int *CopyArray(int *ary, int size);
void InsertionSort(int*, int);
void Merge(int*, int, int, int);
void RecursiveMergeSort(int*, int, int);
void MergeSort(int*, int);
void HeapifyElement(int*, int, int);
void Heapify(int*, int);
void HeapSort(int*, int);
void RecursiveQuickSort(int*, int, int);
void QuickSort(int*, int);
int MaxValue(int*, int);
void CountingSort(int*, int);
int NumDigits(int);
int DigitValue(int, int);
void CountingSort(int*, int, int);
void RadixSort(int*, int);
void InsertionSort(vector<int>&);
void BucketSort(int*, int);


/* ========================================================================== 
 *	PROGRAM Strategy Software pattern example
 *
 *	Description:	This program applies the software pattern "Strategy" to solve 
 *  the sorting of numbers running an "analysis" on them, and then applying the best sorting algorithm that sorts them
 *
 *  Algorithms retrieved from:
 *  https://gist.github.com/evangilo/a6d0e7a5f6d7726d9660
 * 
 * ========================================================================== */

//===========================  Strategy
class SortingAlgorithm {
  public:
    string name;
    virtual void executeSort(int* array, int arraySize) = 0;
};
SortingAlgorithm* analyzeArrayForBestAlgorithm(int* array, int arraySize);
//=====

//===========================  Concrete Strategy
/*
- These classes allow scalability to add new implementations for the same problem without much problem
Only making the client code take into account this new strategy and use it on the context
(Open closed | Dependency Inversion)
*/
class MergeSortStrategy : public SortingAlgorithm {
 public:

    MergeSortStrategy() {
        this->name = "Merge Sort Algorithm";
    }

    void executeSort(int* array, int arraySize) override {
        MergeSort(array, arraySize);
    }
};

class HeapSortStrategy : public SortingAlgorithm {
 public:

    HeapSortStrategy() {
        this->name = "Heap Sort Algorithm";
    }

    void executeSort(int* array, int arraySize) override {
        HeapSort(array, arraySize);
    }
};

class RadixSortStrategy : public SortingAlgorithm {
 public:

    RadixSortStrategy() {
        this->name = "Radix Sort Algorithm";
    }

    void executeSort(int* array, int arraySize) override {
        RadixSort(array, arraySize);
    }
};

class BucketSortStrategy : public SortingAlgorithm {
 public:

    BucketSortStrategy() {
        this->name = "Bucket Sort Algorithm";
    }

    void executeSort(int* array, int arraySize) override {
        BucketSort(array, arraySize);
    }
};
//=====

//===========================  Context
/*
- Manage the Concrete Strategies that are going to be used 
    This means that we chieve -> (Decrease [[COUPLING]] on the system | Single Responsibility | Dependency Inversion)
- Dependency Inversion : The "Context" class acts as a bridge between the high-level module(Client code)
and the Low-level modules(The [[IMPLEMENTATION]] of the service, e. g. "#include" used for the function, code written, etc)
*/
class Sorter {
 private:
    SortingAlgorithm* strategy;
 public:

    Sorter() {
        this->strategy = nullptr;
    }

    ~Sorter() {
        if(this->strategy == nullptr)
            delete this->strategy;
    }

    void setStrategy(SortingAlgorithm* pstrategy) {
        if(this->strategy == nullptr)
            this->strategy = pstrategy;
        else {
            delete this->strategy;
            this->strategy = pstrategy;
        }
    }

    void applyStrategy(int* array, int arraySize) {
        cout << "Applying " << this->strategy->name << endl;
        this->strategy->executeSort(array, arraySize);
    }
};
//=====

int main( int argc, char ** argv ) {
    //===========================  Checking program arguments
    // argv[1] : Stands for the size of the array to randomly generate
    // argv[2] : Stands for the range each value can take, starting from 0
    // E. G. If argv[1] = 10 && argv[2] = 999 : Means an array of size 10, with values ranging from 0-999
    int N = 300;
    int MAX_KEY_VALUE = 99;
    if (argc > 1) {
        N = atoi(argv[1]);
    }
    if (argc > 2) {
        MAX_KEY_VALUE = atoi(argv[2]);
    }
    //=====

    // Making array and analysis
    int* array = RandomArray(N, MAX_KEY_VALUE);
    int arraySize = N;
    int* arrayCopy = CopyArray(array, arraySize);
    SortingAlgorithm* bestSuitedAlgorithmForData = analyzeArrayForBestAlgorithm(array, arraySize);

    // Setting the Strategy software pattern
    Sorter sorter = Sorter();
    sorter.setStrategy(bestSuitedAlgorithmForData);
    sorter.applyStrategy(arrayCopy, arraySize);

    // print the generated array if size is not too big
    if(N < 750) {
        cout << endl;
        for (int i = 0; i < arraySize; i++) {
            cout << array[i] << ", ";
        }
        cout << endl;
    }
    delete array;

    return 0;
}

/**
 * @brief Performs the 4 algorithms over a given array to get the algorithm with the smallest time
 * and returns that algorithm strategy class allocated in Heap 
 * 
 * @param array Array to be sorted
 * @param arraySize Size of the array
 * @return SortingAlgorithm* Strategy class that sorted the array in the smallest amount of time
 */
SortingAlgorithm* analyzeArrayForBestAlgorithm(int* array, int arraySize) {
    //===========================  Setting variables
    const int NUM_SORT_FUNCS = 4;
    int **arrayToBeTested = new int*[NUM_SORT_FUNCS];
    for(int ii = 0; ii < NUM_SORT_FUNCS; ii++) {
        arrayToBeTested[ii] = CopyArray(array, arraySize);
    }
    double timeTaken[NUM_SORT_FUNCS] = {0};
    const string sortFuncNames[] = {"Merge Sort", "Heap Sort",
                                    "Radix Sort",
                                    "Bucket Sort"};
    SortingAlgorithm* sortFunctions[] = {new MergeSortStrategy(), new HeapSortStrategy()
                                        , new RadixSortStrategy(), new BucketSortStrategy()};
    //=====

    //===========================  Analyizing the array
    timeval start, end;
    for(int ii = 0; ii < NUM_SORT_FUNCS; ++ii) {
        cout << sortFuncNames[ii] << endl;
        gettimeofday(&start, NULL);
        sortFunctions[ii]->executeSort(arrayToBeTested[ii], arraySize);
        gettimeofday(&end, NULL);
        timeTaken[ii] = PrintTimeDiff(start, end);
        cout << endl;
    }
    //=====

    //===========================  Getting and returning value with least time taken
    double min = timeTaken[0];
    int minIndex = 0;
    for (int ii = 1; ii < NUM_SORT_FUNCS; ++ii)
        if (timeTaken[ii] < min) {
            min = timeTaken[ii];
            minIndex = ii;
        }
    
    for(int ii = 0; ii < NUM_SORT_FUNCS; ii++) {
        if(ii != minIndex)
            delete sortFunctions[ii];
    }
    delete arrayToBeTested;
    return sortFunctions[minIndex];
    //=====
   
}

// ========================================================================== //
// Method Name - RandomArray
//      Returns an integer array based on the size and max key value.
// ========================================================================== //
int *RandomArray(int size, int maxKeyValue) {
    int *randArray = new int[size];
    timeval timeseed;
    gettimeofday(&timeseed, NULL);

    srand(timeseed.tv_usec);
    for (int i = 0; i < size; ++i)
        randArray[i] = (rand() % maxKeyValue) + 1;

    return randArray;
}

// ========================================================================== //
// Method Name - PrintTimeDiff
//      Prints the time difference, in microseconds, of two time parameters.
// ========================================================================== //
double PrintTimeDiff(timeval start, timeval end) {
    long seconds = end.tv_sec - start.tv_sec;
    long useconds = end.tv_usec - start.tv_usec;
    long utime = ((seconds * 1000000) + useconds);
    double convertedTime = (double) utime / (TO_SECONDS_FORMULA);

    // cout << "\t" << utime;
    cout << convertedTime << "        ";
    fflush(stdout);
    return convertedTime;
}

// ========================================================================== //
// Method Name - CopyArray
//      Returns a deep copy of an array.
// ========================================================================== //
int *CopyArray(int *ary, int size) {
    int *tmp = new int[size];

    for (int i = 0; i < size; ++i)
        tmp[i] = ary[i];

    return tmp;
}







// ========================================================================== //
// Method Name - InsertionSort
//      Implementation of the insertion sort algorithm for integers.
// ========================================================================== //
void InsertionSort(int *ary, int size) {
    for (int i = 1; i < size; ++i) {
        int key = ary[i];
        for (int j = i - 1; j >= 0 && ary[j] > key; --j) {
            ary[j + 1] = ary[j];
            ary[j] = key;
        }
    }
}

// ========================================================================== //
// Method Name - Merge
//      Merge a range from an array - used in the merge sort implementation.
// ========================================================================== //
void Merge(int *ary, int start, int mid, int end) {
    // Necessary variables
    int tmpIndex = 0,
            rightStart = mid + 1,
            rightEnd = end,
            leftEnd = mid;

    // Temporary array
    int *tmp = new int[end - start + 1];

    // Append max until one half is out of elements
    while (start <= leftEnd && rightStart <= rightEnd)
        if (ary[leftEnd] > ary[rightEnd])
            tmp[tmpIndex++] = ary[leftEnd--];
        else
            tmp[tmpIndex++] = ary[rightEnd--];

    // Append the remaining elements
    while (start <= leftEnd)
        tmp[tmpIndex++] = ary[leftEnd--];
    while (rightStart <= rightEnd)
        tmp[tmpIndex++] = ary[rightEnd--];

    // Reverse temp array and put it back into ary
    for (int i = start; i <= end; ++i)
        ary[i] = tmp[end - i];

    // Delete temporary array
    delete[] tmp;
}

// ========================================================================== //
// Method Name - RecursiveMergeSort
//      Recursive portion of the merge sort algorithm.
// ========================================================================== //
void RecursiveMergeSort(int *ary, int start, int end) {
    int mid = (end + start) / 2;

    if (start < end) {
        RecursiveMergeSort(ary, start, mid);
        RecursiveMergeSort(ary, mid + 1, end);
        Merge(ary, start, mid, end);
    }
}

// ========================================================================== //
// Method Name - MergeSort
//      Implementation of the merge sort algorithm for integers.
// ========================================================================== //
void MergeSort(int *ary, int size) {
    RecursiveMergeSort(ary, 0, size - 1);
}

// ========================================================================== //
// Method Name - Heapify Element
//      Heapify a single element from an array. If the heap property is
//      violated, it will be corrected by heapifying the offending element.
// ========================================================================== //
void HeapifyElement(int *ary, int size, int loc) {
    int tmp;
    int toSwap = loc;
    int child = loc * 2 + 1;

    // While the current element has a child
    while (child < size) {

        // Check if left child is larger
        if (ary[child] > ary[toSwap])
            toSwap = child;

        // Check if right child exists and is larger
        if (child + 1 < size && ary[child + 1] > ary[toSwap])
            toSwap = child + 1;

        // Swap if necessary
        if (loc != toSwap) {
            tmp = ary[loc];
            ary[loc] = ary[toSwap];
            ary[toSwap] = tmp;

            loc = toSwap;
            child = loc * 2 + 1;
        } else
            break;
    }
}

// ========================================================================== //
// Method Name - Heapify
//      Heapify an entire array from the bottom-up. The array is guaranteed 
//      to satisfy the heap property after this method is called.
// ========================================================================== //
void Heapify(int *ary, int size) {
    // Bottom-up
    for (int i = size - 1; i >= 0; --i)
        HeapifyElement(ary, size, i);
}

// ========================================================================== //
// Method Name - HeapSort
//      Implementation of the heap sort algorithm for integers.
// ========================================================================== //
void HeapSort(int *ary, int size) {
    int tmp;
    Heapify(ary, size);

    while (size > 0) {
        tmp = ary[0];
        ary[0] = ary[--size];
        ary[size] = tmp;

        HeapifyElement(ary, size, 0);
    }
}

// ========================================================================== //
// Method Name - RecursiveQuickSort
//      Recursive portion of the quick sort algorithm.
// ========================================================================== //
void RecursiveQuickSort(int *ary, int start, int end) {
    int i = start,
            j = end,
            pivot = ary[(start + end) / 2],
            tmp;

    while (i <= j) {
        while (ary[i] < pivot)
            ++i;
        while (ary[j] > pivot)
            --j;
        if (i <= j) {
            tmp = ary[i];
            ary[i++] = ary[j];
            ary[j--] = tmp;
        }
    }

    if (start < j)
        RecursiveQuickSort(ary, start, j);
    if (i < end)
        RecursiveQuickSort(ary, i, end);
}

// ========================================================================== //
// Method Name - QuickSort
//      Implementation of the quick sort algorithm for integers.
// ========================================================================== //
void QuickSort(int *ary, int size) {
    RecursiveQuickSort(ary, 0, size - 1);
}

// ========================================================================== //
// Method Name - MaxValue
//      Returns the element with the maximum value from an array.
// ========================================================================== //
int MaxValue(int *ary, int size) {
    int max = 0;

    for (int i = 0; i < size; ++i)
        if (ary[i] > max)
            max = ary[i];

    return max;
}

// ========================================================================== //
// Method Name - CountingSort
//      Implementation of the counting sort algorithm for integers.
// ========================================================================== //
void CountingSort(int *ary, int size) {
    int k = MaxValue(ary, size) + 1;

    // Initialize temporary & counting arrays
    int *temp = new int[size];
    int *counts = new int[k];
    for (int i = 0; i < k; ++i)
        counts[i] = 0;

    // Count occurrences
    for (int i = 0; i < size; ++i)
        ++counts[ary[i]];

    // Add previous indexes to get spot in final array
    for (int i = 1; i < k; ++i)
        counts[i] += counts[i - 1];

    // Copy from ary to correct position in temp
    for (int i = size - 1; i >= 0; --i) {
        temp[counts[ary[i]] - 1] = ary[i];
        --counts[ary[i]];
    }

    // Copy sorted array back into the original array
    for (int i = 0; i < size; ++i)
        ary[i] = temp[i];

    delete []temp;
    delete []counts;
}

// ========================================================================== //
// Method Name - NumDigits
//      Returns the number of digits in the specified integer.
// ========================================================================== //
int NumDigits(int num) {
    int digits = 0;

    while (num > 0) {
        ++digits;
        num /= 10;
    }

    return digits;
}

// ========================================================================== //
// Method Name - DigitValue
//      Returns the value of the digit specified from the number specified.
// ========================================================================== //
int DigitValue(int num, int digit) {
    for (int i = 0; num > 0 && i < digit; ++i)
        num /= 10;

    return num % 10;
}

// ========================================================================== //
// Method Name - CountingSort
//      Overloaded implementation of the counting sort algorithm that uses
//      the specified digit of each element as the key. Used by radix sort.
// ========================================================================== //
void CountingSort(int *ary, int size, int digit) {
    const int NUM_DIGITS = 10;

    // Initialize temporary & counting arrays
    int *temp = new int[size];
    int counts[NUM_DIGITS];
    for (int i = 0; i < NUM_DIGITS; ++i)
        counts[i] = 0;

    // Count occurrences
    for (int i = 0; i < size; ++i)
        ++counts[DigitValue(ary[i], digit)];

    // Add previous indexes to get spot in final array
    for (int i = 1; i < NUM_DIGITS; ++i)
        counts[i] += counts[i - 1];

    // Copy from ary to correct position in temp
    for (int i = size - 1; i >= 0; --i) {
        temp[counts[ DigitValue(ary[i], digit)] - 1] = ary[i];
        --counts[DigitValue(ary[i], digit)];
    }

    // Copy sorted array back into the original array
    for (int i = 0; i < size; ++i)
        ary[i] = temp[i];

    delete []temp;
}

// ========================================================================== //
// Method Name - RadixSort
//      Implementation of the radix sort algorithm for integers.
// ========================================================================== //
void RadixSort(int *ary, int size) {
    int digits = NumDigits(MaxValue(ary, size));

    for (int i = 0; i < digits; ++i)
        CountingSort(ary, size, i);
}

// ========================================================================== //
// Method Name - InsertionSort
//      Overloaded implementation of insertion sort for vectors. Used by
//      bucket sort.
// ========================================================================== //
void InsertionSort(vector<int> &v) {
    for (int i = 1; i < v.size(); ++i) {
        int key = v[i];
        for (int j = i - 1; j >= 0 && v[j] > key; --j) {
            v[j + 1] = v[j];
            v[j] = key;
        }
    }
}

// ========================================================================== //
// Method Name - BucketSort
//      Implementation of the bucket sort algorithm for integers.
// ========================================================================== //
void BucketSort(int *ary, int size) {
    int max = MaxValue(ary, size);

    vector<int> *buckets = new vector<int>[size];

    // Place item into buckets
    for (int i = 0; i < size; ++i) {
        int toBucket = size * (ary[i] / (double) max) - 1;
        buckets[toBucket].push_back(ary[i]);
    }

    // Sort each bucket and put it into the original array
    int index = -1;
    for (int i = 0; i < size; ++i) {
        InsertionSort(buckets[i]);
        for (int j = 0; j < buckets[i].size(); ++j) {
            ary[++index] = buckets[i][j];
        }
    }

    delete []buckets;
}