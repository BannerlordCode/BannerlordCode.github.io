---
title: INativeArray Interface
description: Documentation for native array operations interface
---

# INativeArray

**File**: `TaleWorlds.DotNet/INativeArray.cs`  
**Namespace**: `TaleWorlds.DotNet`  
**Attribute**: `[LibraryInterfaceBase]`

`INativeArray` interface provides operations for native C++ arrays. Methods are mapped to native functions via `[EngineMethod]` attribute.

## Interface Definition

```csharp
[LibraryInterfaceBase]
internal interface INativeArray
{
    [EngineMethod("get_data_pointer_offset", false, null, false)]
    int GetDataPointerOffset();

    [EngineMethod("create", false, null, false)]
    NativeArray Create();

    [EngineMethod("get_data_size", false, null, false)]
    int GetDataSize(UIntPtr pointer);

    [EngineMethod("get_data_pointer", false, null, false)]
    UIntPtr GetDataPointer(UIntPtr pointer);

    [EngineMethod("add_integer_element", false, null, false)]
    void AddIntegerElement(UIntPtr pointer, int value);

    [EngineMethod("add_float_element", false, null, false)]
    void AddFloatElement(UIntPtr pointer, float value);

    [EngineMethod("add_element", false, null, false)]
    void AddElement(UIntPtr pointer, IntPtr element, int elementSize);

    [EngineMethod("clear", false, null, false)]
    void Clear(UIntPtr pointer);
}
```

---

## Methods

| Method | Signature | Purpose |
|--------|-----------|---------|
| GetDataPointerOffset | `int GetDataPointerOffset()` | Get data pointer offset |
| Create | `NativeArray Create()` | Create new native array |
| GetDataSize | `int GetDataSize(UIntPtr pointer)` | Get array data size (bytes) |
| GetDataPointer | `UIntPtr GetDataPointer(UIntPtr pointer)` | Get data pointer |
| AddIntegerElement | `void AddIntegerElement(UIntPtr, int)` | Add int element |
| AddFloatElement | `void AddFloatElement(UIntPtr, float)` | Add float element |
| AddElement | `void AddElement(UIntPtr, IntPtr, int)` | Add any type element |
| Clear | `void Clear(UIntPtr pointer)` | Clear array |

---

## Usage Examples

### Basic Array Operations

```csharp
// Create native array
NativeArray array = NativeArray.Create();

// Add elements - supports multiple types
array.AddElement(42);           // int
array.AddElement(3.14f);       // float
array.AddElement(new Vec3());   // struct

// Get array length
int length = array.GetLength<int>();

// Convert to managed array
int[] managedArray = array.ToArray<int>();

// Clear array
array.Clear();
```

### Generic Array Operations

```csharp
// Add custom struct
[StructLayout(LayoutKind.Sequential)]
public struct MyStruct
{
    public int Id;
    public float Value;
}

NativeArray array = NativeArray.Create();
MyStruct myData = new MyStruct { Id = 1, Value = 2.5f };
array.AddElement(myData);

// Read element
MyStruct readData = array.GetElementAt<MyStruct>(0);
```

### Iterating Array

```csharp
NativeArray array = NativeArray.Create();
array.AddElement(1);
array.AddElement(2);
array.AddElement(3);

// Use IEnumerable to iterate
foreach (int value in array)
{
    Console.WriteLine(value);
}

// Or convert to array then use
int[] arr = array.ToArray<int>();
for (int i = 0; i < arr.Length; i++)
{
    Console.WriteLine($"[{i}] = {arr[i]}");
}
```

---

## NativeArray Wrapper Class

`NativeArray` is the user-friendly wrapper for `INativeArray`:

```csharp
[EngineClass("ftdnNative_array")]
public sealed class NativeArray : NativeObject
{
    public static NativeArray Create();
    
    public int DataSize { get; }
    
    public int GetLength<T>() where T : struct;
    public T GetElementAt<T>(int index) where T : struct;
    public IEnumerable<T> GetEnumerator<T>() where T : struct;
    public T[] ToArray<T>() where T : struct;
    
    public void AddElement(int value);
    public void AddElement(float value);
    public void AddElement<T>(T value) where T : struct;
    public void Clear();
}
```

---

## Memory Layout

```
NativeArray object
    ↓ Pointer (UIntPtr)
Native memory block
    ↓
[Size][Data Pointer]
    ↓
[Element 0][Element 1][Element 2]...
```

- `Size`: 4 bytes, element count
- `Data Pointer`: 8 bytes, points to actual data buffer
- Data buffer: Continuous memory, each element same size

---

## Important Notes

1. **Type safety** - `GetLength<T>` and `GetElementAt<T>` use generics for type safety
2. **Marshal overhead** - `AddElement<T>` uses `Marshal.StructureToPtr` has performance cost
3. **Static buffer** - Internally uses 16KB static buffer `_temporaryData`
4. **Reference semantics** - `NativeArray` inherits from `NativeObject`, auto-manages reference count

---

## Related Files

| File | Description |
|------|-------------|
| `NativeObject.cs` | Base class |
| `NativeArray.cs` | Wrapper class implementation |
| `INativeObjectArray.cs` | Object array interface |
| `INativeString.cs` | String interface |
