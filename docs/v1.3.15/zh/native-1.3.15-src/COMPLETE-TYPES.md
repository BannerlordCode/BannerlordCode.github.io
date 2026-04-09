# TaleWorlds.Native.dll.h - Complete Type Reference

> **Source**: `tmp/native-1.3.15/TaleWorlds.Native.dll.h`  
> **Total Lines**: 33,875  
> **Generated**: 2026-04-09  
> **Note**: IDA Pro decompiler output for TaleWorlds.Native.dll (native P/Invoke bridge DLL)

## Overview

This file contains type definitions extracted from TaleWorlds.Native.dll - a native C++ DLL that serves as a P/Invoke bridge for Mount & Blade II: Bannerlord. The types include:

- Windows API structures
- PE/COFF image format structures
- C++ Exception handling (RTTI) structures
- PhysX physics engine structures
- C++ Standard Library placeholders
- COM interface structures

---

## Statistics

| Category | Count |
|----------|-------|
| Typedef Basic Types | 82 |
| Typedef Struct/Enum/Union | 267 |
| Struct Definitions | 146 |
| Union Definitions | 12 |
| Enum Definitions | 6 |
| Macro Defines | 39 |
| Vftable Structures | 0 |

---

## 1. Basic Typedefs

### 1.1 Primitive Types

| Line | Type | Definition |
|------|------|------------|
| 1 | `undefined` | `unsigned char` |
| 3 | `bool` | `unsigned char` |
| 4 | `byte` | `unsigned char` |
| 5 | `dword` | `unsigned int` |
| 9 | `longlong` | `long long` |
| 11 | `uchar` | `unsigned char` |
| 12 | `uint` | `unsigned int` |
| 13 | `ulong` | `unsigned long` |
| 14 | `ulonglong` | `unsigned long long` |
| 15 | `undefined1` | `unsigned char` |
| 16 | `undefined2` | `unsigned short` |
| 17 | `undefined4` | `unsigned int` |
| 18 | `undefined6` | `unsigned long long` |
| 19 | `undefined8` | `unsigned long long` |
| 20 | `ushort` | `unsigned short` |
| 21 | `wchar16` | `unsigned short` |
| 22 | `wchar_t` | `short` |
| 23 | `word` | `unsigned short` |
| 72 | `__ehstate_t` | `int` |
| 151 | `__uint64` | `ulonglong` |

### 1.2 Windows Type Aliases

| Line | Type | Definition |
|------|------|------------|
| 6 | `GUID` | `unsigned long long` |
| 7 | `ImageBaseOffset32` | `pointer32` |
| 209 | `DWORD` | `ulong` |
| 211 | `ULONGLONG` | `ulonglong` |
| 213 | `DWORDLONG` | `ULONGLONG` |
| 233 | `LPVOID` | `void *` |
| 239 | `WORD` | `ushort` |
| 270 | `HANDLE` | `void *` |
| 274 | `PVOID` | `void *` |
| 324 | `WCHAR` | `wchar_t` |
| 352 | `CHAR` | `char` |
| 356 | `BYTE` | `uchar` |
| 414 | `LONG` | `long` |
| 460 | `DWORD64` | `ulonglong` |
| 476 | `LONGLONG` | `longlong` |
| 604 | `ULONG` | `DWORD` |
| 606 | `OLECHAR` | `WCHAR` |
| 657 | `SHORT` | `short` |
| 832 | `USHORT` | `ushort` |
| 1000 | `NTSTATUS` | `LONG` |
| 1142 | `HRESULT` | `long` |
| 1277 | `INT` | `int` |
| 1279 | `ATOM` | `WORD` |
| 1289 | `LPCVOID` | `void *` |
| 1573 | `LSTATUS` | `LONG` |
| 1593 | `MMRESULT` | `UINT` |

### 1.3 String Pointer Types

| Line | Type | Definition |
|------|------|------------|
| 354 | `LPSTR` | `CHAR *` |
| 608 | `LPCOLESTR` | `OLECHAR *` |
| 865 | `LPCWSTR` | `WCHAR *` |
| 909 | `LPCLSID` | `CLSID *` |
| 1042 | `PCWSTR` | `WCHAR *` |
| 1044 | `LPWSTR` | `WCHAR *` |
| 1144 | `LPCSTR` | `CHAR *` |

### 1.4 Pointer Types

| Line | Type | Definition |
|------|------|------------|
| 235 | `ULONG_PTR` | `ulonglong` |
| 237 | `DWORD_PTR` | `ULONG_PTR` |
| 396 | `PSRWLOCK` | `RTL_SRWLOCK *` |
| 408 | `LPCRITICAL_SECTION` | `PRTL_CRITICAL_SECTION` |
| 454 | `PEXCEPTION_RECORD` | `EXCEPTION_RECORD *` |
| 687 | `uintptr_t` | `ulonglong` |
| 747 | `size_t` | `ulonglong` |
| 761 | `UINT` | `uint` |
| 763 | `UINT_PTR` | `ulonglong` |
| 765 | `WPARAM` | `UINT_PTR` |
| 767 | `LONG_PTR` | `longlong` |
| 769 | `LPARAM` | `LONG_PTR` |
| 847 | `LRESULT` | `LONG_PTR` |
| 1002 | `BCRYPT_ALG_HANDLE` | `PVOID` |
| 1006 | `SIZE_T` | `ULONG_PTR` |
| 1099 | `PDWORD64` | `ulonglong *` |
| 1148 | `PLONG` | `LONG *` |
| 1150 | `PFLS_CALLBACK_FUNCTION` | `void (*)(PVOID)` |
| 1152 | `PLARGE_INTEGER` | `LARGE_INTEGER *` |
| 1163 | `PEXCEPTION_ROUTINE` | `EXCEPTION_ROUTINE *` |
| 1206 | `PULONG_PTR` | `ulonglong *` |
| 1208 | `INT_PTR` | `longlong` |
| 1227 | `UCHAR` | `uchar` |
| 1229 | `PUCHAR` | `UCHAR *` |
| 1231 | `LPDWORD` | `DWORD *` |
| 1233 | `PDWORD` | `DWORD *` |
| 1249 | `PUINT` | `uint *` |
| 1257 | `LPLONG` | `long *` |
| 1269 | `FARPROC` | `INT_PTR (*)(void)` |
| 1285 | `LPBOOL` | `BOOL *` |
| 1287 | `PBYTE` | `BYTE *` |
| 1575 | `REGSAM` | `ACCESS_MASK` |

### 1.5 Handle Types

| Line | Type | Definition |
|------|------|------------|
| 859 | `HCURSOR` | `HICON` |
| 1253 | `HMODULE` | `HINSTANCE` |
| 1255 | `HLOCAL` | `HANDLE` |
| 1275 | `PHKEY` | `HKEY *` |
| 1283 | `HGLOBAL` | `HANDLE` |

### 1.6 Function Pointer Types

| Line | Type | Definition |
|------|------|------------|
| 448 | `PTOP_LEVEL_EXCEPTION_FILTER` | `LONG (*)(struct _EXCEPTION_POINTERS *)` |
| 593 | `LPTOP_LEVEL_EXCEPTION_FILTER` | `PTOP_LEVEL_EXCEPTION_FILTER` |
| 849 | `WNDPROC` | `LRESULT (*)(HWND, UINT, WPARAM, LPARAM)` |
| 1056 | `EXCEPTION_ROUTINE` | `EXCEPTION_DISPOSITION (*)(struct _EXCEPTION_RECORD *, PVOID, struct _CONTEXT *, PVOID)` |
| 1269 | `FARPROC` | `INT_PTR (*)(void)` |
| 1886 | `_onexit_t` | `int (*)(void)` |
| 1888 | `_invalid_parameter_handler` | `void (*)(wchar_t *, wchar_t *, wchar_t *, uint, uintptr_t)` |

### 1.7 Special IDA Types

| Line | Type | Definition |
|------|------|------------|
| 1 | `undefined` | `unsigned char` |
| 6 | `GUID` | `unsigned long long` |
| 7 | `ImageBaseOffset32` | `pointer32` |
| 10 | `qword` | `unsigned long long` |

---

## 2. Struct Definitions

### 2.1 Exception Handling / RTTI Structures

#### `_s_UnwindMapEntry` (Line 74)
```c
struct _s_UnwindMapEntry {
    __ehstate_t toState;
    ImageBaseOffset32 action;
};
```

#### `_s_IPToStateMapEntry` (Line 83)
```c
struct _s_IPToStateMapEntry {
    ImageBaseOffset32 Ip;
    __ehstate_t state;
};
```

#### `PMD` (Line 110)
```c
struct PMD {
    int mdisp;
    int pdisp;
    int vdisp;
};
```

#### `_s__RTTIBaseClassDescriptor` (Line 116)
```c
struct _s__RTTIBaseClassDescriptor {
    ImageBaseOffset32 pTypeDescriptor;  // ref to TypeDescriptor (RTTI 0) for class
    dword numContainedBases;             // count of extended classes in BaseClassArray (RTTI 2)
    struct PMD where;                    // member displacement structure
    dword attributes;                    // bit flags
    ImageBaseOffset32 pClassHierarchyDescriptor;  // ref to ClassHierarchyDescriptor (RTTI 3) for class
};
```

#### `_s__RTTICompleteObjectLocator` (Line 128)
```c
struct _s__RTTICompleteObjectLocator {
    dword signature;
    dword offset;              // offset of vbtable within class
    dword cdOffset;            // constructor displacement offset
    ImageBaseOffset32 pTypeDescriptor;   // ref to TypeDescriptor (RTTI 0) for class
    ImageBaseOffset32 pClassDescriptor;   // ref to ClassHierarchyDescriptor (RTTI 3)
};
```

#### `_s_FuncInfo` (Line 138)
```c
struct _s_FuncInfo {
    uint magicNumber_and_bbtFlags;
    __ehstate_t maxState;
    ImageBaseOffset32 dispUnwindMap;
    uint nTryBlocks;
    ImageBaseOffset32 dispTryBlockMap;
    uint nIPMapEntries;
    ImageBaseOffset32 dispIPToStateMap;
    int dispUnwindHelp;
    ImageBaseOffset32 dispESTypeList;
    int EHFlags;
};
```

#### `_s_HandlerType` (Line 157)
```c
struct _s_HandlerType {
    uint adjectives;
    ImageBaseOffset32 dispType;
    int dispCatchObj;
    ImageBaseOffset32 dispOfHandler;
    dword dispFrame;
};
```

#### `_s_TryBlockMapEntry` (Line 167)
```c
struct _s_TryBlockMapEntry {
    __ehstate_t tryLow;
    __ehstate_t tryHigh;
    __ehstate_t catchHigh;
    int nCatches;
    ImageBaseOffset32 dispHandlerArray;
};
```

#### `_s__RTTIClassHierarchyDescriptor` (Line 190)
```c
struct _s__RTTIClassHierarchyDescriptor {
    dword signature;
    dword attributes;                    // bit flags
    dword numBaseClasses;                // number of base classes (i.e. rtti1Count)
    RTTIBaseClassDescriptor *32 __((image-base-relative)) *32 __((image-base-relative)) pBaseClassArray;  // ref to BaseClassArray (RTTI 2)
};
```

### 2.2 PE/COFF Image Structures

#### `IMAGE_DOS_HEADER` (Line 1169)
```c
struct IMAGE_DOS_HEADER {
    char e_magic[2];             // Magic number
    word e_cblp;                 // Bytes of last page
    word e_cp;                   // Pages in file
    word e_crlc;                 // Relocations
    word e_cparhdr;              // Size of header in paragraphs
    word e_minalloc;             // Minimum extra paragraphs needed
    word e_maxalloc;             // Maximum extra paragraphs needed
    word e_ss;                   // Initial (relative) SS value
    word e_sp;                   // Initial SP value
    word e_csum;                 // Checksum
    word e_ip;                   // Initial IP value
    word e_cs;                   // Initial (relative) CS value
    word e_lfarlc;              // File address of relocation table
    word e_ovno;                // Overlay number
    word e_res[4][4];           // Reserved words
    word e_oemid;               // OEM identifier (for e_oeminfo)
    word e_oeminfo;             // OEM information; e_oemid specific
    word e_res2[10][10];        // Reserved words
    dword e_lfanew;             // File address of new exe header
    byte e_program[64];          // Actual DOS program
};
```

#### `IMAGE_FILE_HEADER` (Line 1324)
```c
struct IMAGE_FILE_HEADER {
    word Machine;                    // 34404
    word NumberOfSections;
    dword TimeDateStamp;
    dword PointerToSymbolTable;
    dword NumberOfSymbols;
    word SizeOfOptionalHeader;
    word Characteristics;
};
```

#### `IMAGE_OPTIONAL_HEADER64` (Line 1423)
```c
struct IMAGE_OPTIONAL_HEADER64 {
    word Magic;
    byte MajorLinkerVersion;
    byte MinorLinkerVersion;
    dword SizeOfCode;
    dword SizeOfInitializedData;
    dword SizeOfUninitializedData;
    ImageBaseOffset32 AddressOfEntryPoint;
    ImageBaseOffset32 BaseOfCode;
    pointer64 ImageBase;
    dword SectionAlignment;
    dword FileAlignment;
    word MajorOperatingSystemVersion;
    word MinorOperatingSystemVersion;
    word MajorImageVersion;
    word MinorImageVersion;
    word MajorSubsystemVersion;
    word MinorSubsystemVersion;
    dword Win32VersionValue;
    dword SizeOfImage;
    dword SizeOfHeaders;
    dword CheckSum;
    word Subsystem;
    word DllCharacteristics;
    qword SizeOfStackReserve;
    qword SizeOfStackCommit;
    qword SizeOfHeapReserve;
    qword SizeOfHeapCommit;
    dword LoaderFlags;
    dword NumberOfRvaAndSizes;
    struct IMAGE_DATA_DIRECTORY DataDirectory[16];
};
```

#### `IMAGE_SECTION_HEADER` (Line 1505)
```c
struct IMAGE_SECTION_HEADER {
    char Name[8];
    union Misc Misc;
    ImageBaseOffset32 VirtualAddress;
    dword SizeOfRawData;
    dword PointerToRawData;
    dword PointerToRelocations;
    dword PointerToLinenumbers;
    word NumberOfRelocations;
    word NumberOfLinenumbers;
    enum SectionFlags Characteristics;
};
```

#### `IMAGE_NT_HEADERS64` (Line 1520)
```c
struct IMAGE_NT_HEADERS64 {
    char Signature[4];
    struct IMAGE_FILE_HEADER FileHeader;
    struct IMAGE_OPTIONAL_HEADER64 OptionalHeader;
};
```

#### `IMAGE_DATA_DIRECTORY` (Line 1418)
```c
struct IMAGE_DATA_DIRECTORY {
    ImageBaseOffset32 VirtualAddress;
    dword Size;
};
```

#### `IMAGE_DEBUG_DIRECTORY` (Line 1311)
```c
struct IMAGE_DEBUG_DIRECTORY {
    dword Characteristics;
    dword TimeDateStamp;
    word MajorVersion;
    word MinorVersion;
    dword Type;
    dword SizeOfData;
    dword AddressOfRawData;
    dword PointerToRawData;
};
```

#### `IMAGE_LOAD_CONFIG_DIRECTORY64` (Line 1355)
```c
struct IMAGE_LOAD_CONFIG_DIRECTORY64 {
    dword Size;
    dword TimeDateStamp;
    word MajorVersion;
    word MinorVersion;
    dword GlobalFlagsClear;
    dword GlobalFlagsSet;
    dword CriticalSectionDefaultTimeout;
    qword DeCommitFreeBlockThreshold;
    qword DeCommitTotalFreeThreshold;
    pointer64 LockPrefixTable;
    qword MaximumAllocationSize;
    qword VirtualMemoryThreshold;
    qword ProcessAffinityMask;
    dword ProcessHeapFlags;
    word CsdVersion;
    word DependentLoadFlags;
    pointer64 EditList;
    pointer64 SecurityCookie;
    pointer64 SEHandlerTable;
    qword SEHandlerCount;
    pointer64 GuardCFCCheckFunctionPointer;
    pointer64 GuardCFDispatchFunctionPointer;
    pointer64 GuardCFFunctionTable;
    qword GuardCFFunctionCount;
    enum IMAGE_GUARD_FLAGS GuardFlags;
    struct IMAGE_LOAD_CONFIG_CODE_INTEGRITY CodeIntegrity;
    pointer64 GuardAddressTakenIatEntryTable;
    qword GuardAddressTakenIatEntryCount;
    pointer64 GuardLongJumpTargetTable;
    qword GuardLongJumpTargetCount;
    pointer64 DynamicValueRelocTable;
    pointer64 CHPEMetadataPointer;
    pointer64 GuardRFFailureRoutine;
    pointer64 GuardRFFailureRoutineFunctionPointer;
    dword DynamicValueRelocTableOffset;
    word DynamicValueRelocTableSection;
    word Reserved1;
    pointer64 GuardRFVerifyStackPointerFunctionPointer;
    dword HotPatchTableOffset;
    dword Reserved2;
    qword Reserved3;
};
```

### 2.3 Windows API Structures

#### `CLIENT_ID` (Line 181)
```c
struct CLIENT_ID {
    void *UniqueProcess;
    void *UniqueThread;
};
```

#### `_MEMORYSTATUSEX` (Line 215)
```c
struct _MEMORYSTATUSEX {
    DWORD dwLength;
    DWORD dwMemoryLoad;
    DWORDLONG ullTotalPhys;
    DWORDLONG ullAvailPhys;
    DWORDLONG ullTotalPageFile;
    DWORDLONG ullAvailPageFile;
    DWORDLONG ullTotalVirtual;
    DWORDLONG ullAvailVirtual;
    DWORDLONG ullAvailExtendedVirtual;
};
```

#### `_SYSTEM_INFO` (Line 253)
```c
struct _SYSTEM_INFO {
    union _union_552 u;
    DWORD dwPageSize;
    LPVOID lpMinimumApplicationAddress;
    LPVOID lpMaximumApplicationAddress;
    DWORD_PTR dwActiveProcessorMask;
    DWORD dwNumberOfProcessors;
    DWORD dwProcessorType;
    DWORD dwAllocationGranularity;
    WORD wProcessorLevel;
    WORD wProcessorRevision;
};
```

#### `_OVERLAPPED` (Line 286)
```c
struct _OVERLAPPED {
    ULONG_PTR Internal;
    ULONG_PTR InternalHigh;
    union _union_540 u;
    HANDLE hEvent;
};
```

#### `_SECURITY_ATTRIBUTES` (Line 297)
```c
struct _SECURITY_ATTRIBUTES {
    DWORD nLength;
    LPVOID lpSecurityDescriptor;
    BOOL bInheritHandle;
};
```

#### `_SYSTEMTIME` (Line 305)
```c
struct _SYSTEMTIME {
    WORD wYear;
    WORD wMonth;
    WORD wDayOfWeek;
    WORD wDay;
    WORD wHour;
    WORD wMinute;
    WORD wSecond;
    WORD wMilliseconds;
};
```

#### `_FILETIME` (Line 326)
```c
struct _FILETIME {
    DWORD dwLowDateTime;
    DWORD dwHighDateTime;
};
```

#### `_WIN32_FIND_DATAW` (Line 331)
```c
struct _WIN32_FIND_DATAW {
    DWORD dwFileAttributes;
    FILETIME ftCreationTime;
    FILETIME ftLastAccessTime;
    FILETIME ftLastWriteTime;
    DWORD nFileSizeHigh;
    DWORD nFileSizeLow;
    DWORD dwReserved0;
    DWORD dwReserved1;
    WCHAR cFileName[260];
    WCHAR cAlternateFileName[14];
};
```

#### `_STARTUPINFOA` (Line 360)
```c
struct _STARTUPINFOA {
    DWORD cb;
    LPSTR lpReserved;
    LPSTR lpDesktop;
    LPSTR lpTitle;
    DWORD dwX;
    DWORD dwY;
    DWORD dwXSize;
    DWORD dwYSize;
    DWORD dwXCountChars;
    DWORD dwYCountChars;
    DWORD dwFillAttribute;
    DWORD dwFlags;
    WORD wShowWindow;
    WORD cbReserved2;
    LPBYTE lpReserved2;
    HANDLE hStdInput;
    HANDLE hStdOutput;
    HANDLE hStdError;
};
```

#### `_PROCESS_INFORMATION` (Line 383)
```c
struct _PROCESS_INFORMATION {
    HANDLE hProcess;
    HANDLE hThread;
    DWORD dwProcessId;
    DWORD dwThreadId;
};
```

#### `tagPOINT` (Line 775)
```c
struct tagPOINT {
    long x;
    long y;
};
```

#### `tagMSG` (Line 780)
```c
struct tagMSG {
    HWND hwnd;
    UINT message;
    WPARAM wParam;
    LPARAM lParam;
    DWORD time;
    struct tagPOINT pt;
};
```

#### `tagRECT` (Line 816)
```c
struct tagRECT {
    long left;
    long top;
    long right;
    long bottom;
};
```

#### `tagWNDCLASSEXW` (Line 879)
```c
struct tagWNDCLASSEXW {
    UINT cbSize;
    UINT style;
    WNDPROC lpfnWndProc;
    int cbClsExtra;
    int cbWndExtra;
    HINSTANCE hInstance;
    HICON hIcon;
    HCURSOR hCursor;
    HBRUSH hbrBackground;
    LPCWSTR lpszMenuName;
    LPCWSTR lpszClassName;
    HICON hIconSm;
};
```

### 2.4 Thread/Process Structures

#### `_RTL_SRWLOCK` (Line 398)
```c
struct _RTL_SRWLOCK {
    PVOID Ptr;
};
```

#### `_RTL_CRITICAL_SECTION` (Line 420)
```c
struct _RTL_CRITICAL_SECTION {
    PRTL_CRITICAL_SECTION_DEBUG DebugInfo;
    LONG LockCount;
    LONG RecursionCount;
    HANDLE OwningThread;
    HANDLE LockSemaphore;
    ULONG_PTR SpinCount;
};
```

#### `_LIST_ENTRY` (Line 429)
```c
struct _LIST_ENTRY {
    struct _LIST_ENTRY *Flink;
    struct _LIST_ENTRY *Blink;
};
```

#### `_RTL_CRITICAL_SECTION_DEBUG` (Line 434)
```c
struct _RTL_CRITICAL_SECTION_DEBUG {
    WORD Type;
    WORD CreatorBackTraceIndex;
    struct _RTL_CRITICAL_SECTION *CriticalSection;
    LIST_ENTRY ProcessLocksList;
    DWORD EntryCount;
    DWORD ContentionCount;
    DWORD Flags;
    WORD CreatorBackTraceIndexHigh;
    WORD SpareWORD;
};
```

### 2.5 Context/Exception Structures

#### `_CONTEXT` (Line 528)
```c
struct _CONTEXT {
    // ... full structure contains 926 bytes
    // XMM/SSE context, general purpose registers, debug registers
    union _union_54 u;
    M128A VectorRegister[26];
    DWORD64 VectorControl;
    DWORD64 DebugControl;
    DWORD64 LastBranchToRip;
    DWORD64 LastBranchFromRip;
    DWORD64 LastExceptionToRip;
    DWORD64 LastExceptionFromRip;
};
```

#### `_EXCEPTION_RECORD` (Line 577)
```c
struct _EXCEPTION_RECORD {
    DWORD ExceptionCode;
    DWORD ExceptionFlags;
    struct _EXCEPTION_RECORD *ExceptionRecord;
    PVOID ExceptionAddress;
    DWORD NumberParameters;
    ULONG_PTR ExceptionInformation[15];
};
```

#### `_EXCEPTION_POINTERS` (Line 586)
```c
struct _EXCEPTION_POINTERS {
    struct _EXCEPTION_RECORD *ExceptionRecord;
    struct _CONTEXT *ContextRecord;
};
```

#### `_IMAGE_RUNTIME_FUNCTION_ENTRY` (Line 199)
```c
struct _IMAGE_RUNTIME_FUNCTION_ENTRY {
    ImageBaseOffset32 BeginAddress;
    dword EndAddress;           // Apply ImageBaseOffset32 to see reference
    ImageBaseOffset32 UnwindInfoAddressOrData;
};
```

### 2.6 PhysX SDK Structures (Placeholder)

| Line | Name |
|------|------|
| 1773 | `PxVec3` |
| 1778 | `PxRaycastHit` |
| 1783 | `PxAllocatorCallback` |
| 1788 | `PxSweepHit` |
| 1793 | `PxQuat` |
| 1798 | `PxBounds3` |
| 1803 | `PxFlags<enum_physx::PxHitFlag::Enum,unsigned_short>` |
| 1808 | `PxTransform` |
| 1813 | `PxMat33` |
| 1818 | `PxGeometry` |
| 1823 | `Foundation` |
| 1828 | `CounterFrequencyToTensOfNanos` |

### 2.7 C++ Standard Library Placeholders

| Line | Name |
|------|------|
| 904 | `basic_filebuf<char,struct_std::char_traits<char>_>` |
| 1665 | `basic_ios<wchar_t,struct_std::char_traits<wchar_t>_>` |
| 1670 | `_Facet_base` |
| 1675 | `basic_ostream<wchar_t,struct_std::char_traits<wchar_t>_>` |
| 1680 | `basic_streambuf<char,struct_std::char_traits<char>_>` |
| 1685 | `basic_istream<char,struct_std::char_traits<char>_>` |
| 1690 | `codecvt_base` |
| 1695 | `basic_ostream<char,struct_std::char_traits<char>_>` |
| 1700 | `basic_iostream<char,struct_std::char_traits<char>_>` |
| 1705 | `locale` |
| 1710 | `_Fac_tidy_reg_t` |
| 1715 | `fpos<struct__Mbstatet>` |
| 1720 | `_Locinfo` |
| 1725 | `ctype<char>` |
| 1730 | `basic_ios<char,struct_std::char_traits<char>_>` |
| 1735 | `codecvt<char,char,struct__Mbstatet>` |
| 1740 | `_Lockit` |
| 1745 | `basic_istream<wchar_t,struct_std::char_traits<wchar_t>_>` |
| 1750 | `_Locimp` |
| 1755 | `facet` |
| 1760 | `id` |

### 2.8 COM/Interface Structures

#### `IUnknownVtbl` (Line 1894)
```c
struct IUnknownVtbl {
    HRESULT (*QueryInterface)(struct IUnknown *, IID *, void **);
    ULONG (*AddRef)(struct IUnknown *);
    ULONG (*Release)(struct IUnknown *);
};
```

#### `IUnknown` (Line 1900)
```c
struct IUnknown {
    struct IUnknownVtbl *lpVtbl;
};
```

#### `IAllocator` (Line 1607)
```c
struct IAllocator { // PlaceHolder Structure
};
```

#### `ILogManager` (Line 1612)
```c
struct ILogManager { // PlaceHolder Structure
};
```

#### `IContext` (Line 1630)
```c
struct IContext { // PlaceHolder Structure
};
```

### 2.9 Bannerlord Game Structures

| Line | Name |
|------|------|
| 1597 | `ID3D11Device` |
| 1620 | `ContextCreationParameters` |
| 1625 | `CpuCacheCreationParameters` |
| 1635 | `GpuCacheCreationParameters` |
| 1640 | `ContextBudget` |
| 1645 | `TileSetCreationParameters` |
| 1650 | `DirectX11DeviceOptions` |
| 1655 | `IResourceCallbacks` |
| 1660 | `IDirectX11Device` |
| 1768 | `UMSFreeThreadProxyFactory` |
| 1833 | `MutexImpl` |
| 1838 | `Socket` |

### 2.10 Opaque Handle Types

| Line | Name |
|------|------|
| 789 | `HWND__` |
| 795 | `HRAWINPUT__` |
| 867 | `HBRUSH__` |
| 871 | `HICON__` |
| 875 | `HINSTANCE__` |
| 1217 | `HBITMAP__` |
| 1223 | `HKEY__` |
| 1237 | `HDC__` |
| 1245 | `HMONITOR__` |
| 1263 | `HMENU__` |

---

## 3. Union Definitions

### 3.1 `_LARGE_INTEGER` (Line 1034)
```c
union _LARGE_INTEGER {
    struct _struct_19 s;
    struct _struct_20 u;
    LONGLONG QuadPart;
};
```

### 3.2 `_union_552` (Line 248)
```c
union _union_552 {
    DWORD dwOemId;
    struct _struct_553 s;
};
```

### 3.3 `_union_540` (Line 281)
```c
union _union_540 {
    struct _struct_541 s;
    PVOID Pointer;
};
```

### 3.4 `IMAGE_RESOURCE_DIRECTORY_ENTRY_DirectoryUnion` (Line 97)
```c
union IMAGE_RESOURCE_DIRECTORY_ENTRY_DirectoryUnion {
    dword OffsetToData;
    struct IMAGE_RESOURCE_DIRECTORY_ENTRY_DirectoryStruct IMAGE_RESOURCE_DIRECTORY_ENTRY_DirectoryStruct;
};
```

### 3.5 `IMAGE_RESOURCE_DIRECTORY_ENTRY_NameUnion` (Line 1403)
```c
union IMAGE_RESOURCE_DIRECTORY_ENTRY_NameUnion {
    struct IMAGE_RESOURCE_DIRECTORY_ENTRY_NameStruct IMAGE_RESOURCE_DIRECTORY_ENTRY_NameStruct;
    dword Name;
    word Id;
};
```

### 3.6 `Misc` (Line 1500)
```c
union Misc {
    dword PhysicalAddress;
    dword VirtualSize;
};
```

### 3.7 `_union_1228` (Line 1860)
```c
union _union_1228 {
    HANDLE hIcon;
};
```

---

## 4. Enum Definitions

### 4.1 `_EXCEPTION_DISPOSITION` (Line 595)
```c
typedef enum _EXCEPTION_DISPOSITION {
    ExceptionContinueExecution=0,
    ExceptionContinueSearch=1,
    ExceptionNestedException=2,
    ExceptionCollidedUnwind=3
} _EXCEPTION_DISPOSITION;
```

### 4.2 `IMAGE_GUARD_FLAGS` (Line 1336)
```c
typedef enum IMAGE_GUARD_FLAGS {
    IMAGE_GUARD_CF_INSTRUMENTED=256,
    IMAGE_GUARD_CFW_INSTRUMENTED=512,
    IMAGE_GUARD_CF_FUNCTION_TABLE_PRESENT=1024,
    IMAGE_GUARD_SECURITY_COOKIE_UNUSED=2048,
    IMAGE_GUARD_PROTECT_DELAYLOAD_IAT=4096,
    IMAGE_GUARD_DELAYLOAD_IAT_IN_ITS_OWN_SECTION=8192,
    IMAGE_GUARD_CF_EXPORT_SUPPRESSION_INFO_PRESENT=16384,
    IMAGE_GUARD_CF_ENABLE_EXPORT_SUPPRESSION=32768,
    IMAGE_GUARD_CF_LONGJUMP_TABLE_PRESENT=65536,
    IMAGE_GUARD_RF_INSTRUMENTED=131072,
    IMAGE_GUARD_RF_ENABLE=262144,
    IMAGE_GUARD_RF_STRICT=524288,
    IMAGE_GUARD_CF_FUNCTION_TABLE_SIZE_MASK_1=268435456,
    IMAGE_GUARD_CF_FUNCTION_TABLE_SIZE_MASK_2=536870912,
    IMAGE_GUARD_CF_FUNCTION_TABLE_SIZE_MASK_4=1073741824,
    IMAGE_GUARD_CF_FUNCTION_TABLE_SIZE_MASK_8=2147483648
} IMAGE_GUARD_FLAGS;
```

### 4.3 `SectionFlags` (Line 1460)
```c
typedef enum SectionFlags {
    IMAGE_SCN_TYPE_NO_PAD=8,
    IMAGE_SCN_RESERVED_0001=16,
    IMAGE_SCN_CNT_CODE=32,
    IMAGE_SCN_CNT_INITIALIZED_DATA=64,
    IMAGE_SCN_CNT_UNINITIALIZED_DATA=128,
    IMAGE_SCN_LNK_OTHER=256,
    IMAGE_SCN_LNK_INFO=512,
    IMAGE_SCN_RESERVED_0040=1024,
    IMAGE_SCN_LNK_REMOVE=2048,
    IMAGE_SCN_LNK_COMDAT=4096,
    IMAGE_SCN_GPREL=32768,
    IMAGE_SCN_MEM_16BIT=131072,
    IMAGE_SCN_MEM_PURGEABLE=131072,
    IMAGE_SCN_MEM_LOCKED=262144,
    IMAGE_SCN_MEM_PRELOAD=524288,
    IMAGE_SCN_ALIGN_1BYTES=1048576,
    IMAGE_SCN_ALIGN_2BYTES=2097152,
    IMAGE_SCN_ALIGN_4BYTES=3145728,
    IMAGE_SCN_ALIGN_8BYTES=4194304,
    IMAGE_SCN_ALIGN_16BYTES=5242880,
    IMAGE_SCN_ALIGN_32BYTES=6291456,
    IMAGE_SCN_ALIGN_64BYTES=7340032,
    IMAGE_SCN_ALIGN_128BYTES=8388608,
    IMAGE_SCN_ALIGN_256BYTES=9437184,
    IMAGE_SCN_ALIGN_512BYTES=10485760,
    IMAGE_SCN_ALIGN_1024BYTES=11534336,
    IMAGE_SCN_ALIGN_2048BYTES=12582912,
    IMAGE_SCN_ALIGN_4096BYTES=13631488,
    IMAGE_SCN_ALIGN_8192BYTES=14680064,
    IMAGE_SCN_LNK_NRELOC_OVFL=16777216,
    IMAGE_SCN_MEM_DISCARDABLE=33554432,
    IMAGE_SCN_MEM_NOT_CACHED=67108864,
    IMAGE_SCN_MEM_NOT_PAGED=134217728,
    IMAGE_SCN_MEM_SHARED=268435456,
    IMAGE_SCN_MEM_EXECUTE=536870912,
    IMAGE_SCN_MEM_READ=1073741824,
    IMAGE_SCN_MEM_WRITE=2147483648
} SectionFlags;
```

### 4.4 Empty Enums

| Line | Name |
|------|------|
| 1615 | `Enum` |
| 1763 | `error_type` |

---

## 5. Macro Defines

### 5.1 IDA Unknown Byte Types
```c
#define unkbyte9    unsigned long long   // Line 24
#define unkbyte10   unsigned long long  // Line 25
#define unkbyte11   unsigned long long  // Line 26
#define unkbyte12   unsigned long long  // Line 27
#define unkbyte13   unsigned long long  // Line 28
#define unkbyte14   unsigned long long  // Line 29
#define unkbyte15   unsigned long long  // Line 30
#define unkbyte16   unsigned long long  // Line 31
```

### 5.2 IDA Unknown Unsigned Integer Types
```c
#define unkuint9    unsigned long long  // Line 33
#define unkuint10   unsigned long long  // Line 34
#define unkuint11   unsigned long long  // Line 35
#define unkuint12   unsigned long long  // Line 36
#define unkuint13   unsigned long long  // Line 37
#define unkuint14   unsigned long long  // Line 38
#define unkuint15   unsigned long long  // Line 39
#define unkuint16   unsigned long long  // Line 40
```

### 5.3 IDA Unknown Signed Integer Types
```c
#define unkint9     long long           // Line 42
#define unkint10    long long           // Line 43
#define unkint11    long long           // Line 44
#define unkint12    long long           // Line 45
#define unkint13    long long           // Line 46
#define unkint14    long long           // Line 47
#define unkint15    long long           // Line 48
#define unkint16    long long           // Line 49
```

### 5.4 IDA Unknown Float Types
```c
#define unkfloat1   float               // Line 51
#define unkfloat2   float               // Line 52
#define unkfloat3   float               // Line 53
#define unkfloat5   double              // Line 54
#define unkfloat6   double              // Line 55
#define unkfloat7   double              // Line 56
#define unkfloat9   long double         // Line 57
#define unkfloat11  long double         // Line 58
#define unkfloat12  long double         // Line 59
#define unkfloat13  long double         // Line 60
#define unkfloat14  long double         // Line 61
#define unkfloat15  long double         // Line 62
#define unkfloat16  long double         // Line 63
```

### 5.5 IDA Special Types
```c
#define BADSPACEBASE   void   // Line 65 - IDA Pro special space base marker
#define code           void   // Line 66 - IDA Pro code segment marker
```

---

## 6. Vftable Structures

**No vftable structures found** in this file.

### Explanation

TaleWorlds.Native.dll is a **native C++ P/Invoke bridge DLL**, not a managed .NET assembly. The virtual function tables (vftables) for Bannerlord's managed classes are located in the separate .NET assemblies:

- `TaleWorlds.MountAndBlade.dll`
- `TaleWorlds.Core.dll`
- `TaleWorlds.CampaignSystem.dll`
- Other TaleWorlds.*.dll files

These managed assemblies contain C# classes with virtual methods, and their vftables are structured differently (using .NET MethodTable structures).

---

## Notes

1. **Line Numbers**: All line numbers are 1-indexed from the start of the file.

2. **Placeholder Structures**: Many structures are marked "PlaceHolder Structure" because IDA Pro/Ghidra could not determine their internal layout. This typically occurs for:
   - C++ template instantiations
   - COM interfaces
   - Game engine-specific classes

3. **ImageBaseOffset32**: This type indicates a 32-bit offset from the image base address (RVA - Relative Virtual Address).

4. **Pointer Types**: Types ending with `__((image-base-relative))` indicate pointers that are stored as RVAs rather than absolute addresses.

5. **Function Declarations**: The file contains ~30,000 lines of function declarations starting from line ~1909, using patterns like:
   - `void FUN_180047ca0(...)` - Named by address
   - `void Unwind@180a1b140(...)` - SEH unwind handlers
   - `void Catch@180a1b190(...)` - Exception catch handlers

---

*Generated from TaleWorlds.Native.dll.h (IDA Pro/Ghidra decompiler output)*
