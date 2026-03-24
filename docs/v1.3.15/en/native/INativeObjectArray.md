---
title: INativeObjectArray Interface
description: Documentation for native object array interface
---

# INativeObjectArray

**File**: `TaleWorlds.DotNet/INativeObjectArray.cs`  
**Namespace**: `TaleWorlds.DotNet`  
**Attribute**: `[LibraryInterfaceBase]`

`INativeObjectArray` interface provides operations for native arrays of objects. Array elements are `NativeObject` pointers.

## Interface Definition

```csharp
[LibraryInterfaceBase]
internal interface INativeObjectArray
{
    [EngineMethod("create", false, null, false)]
    NativeObjectArray Create();

    [EngineMethod("get_count", false, null, false)]
    int GetCount(UIntPtr pointer);

    [EngineMethod("add_element", false, null, false)]
    void AddElement(UIntPtr pointer, UIntPtr nativeObject);

    [EngineMethod("get_element_at_index", false, null, false)]
    NativeObject GetElementAtIndex(UIntPtr pointer, int index);

    [EngineMethod("clear", false, null, false)]
    void Clear(UIntPtr pointer);
}
```

---

## Methods

| Method | Signature | Purpose |
|--------|-----------|---------|
| Create | `NativeObjectArray Create()` | Create new object array |
| GetCount | `int GetCount(UIntPtr pointer)` | Get element count |
| AddElement | `void AddElement(UIntPtr, UIntPtr)` | Add NativeObject |
| GetElementAtIndex | `NativeObject GetElementAtIndex(UIntPtr, int)` | Get element at index |
| Clear | `void Clear(UIntPtr pointer)` | Clear array |

---

## Usage Examples

### Basic Object Array Operations

```csharp
// Create native object array
NativeObjectArray array = NativeObjectArray.Create();

// Add force-casted NativeObject
Mission mission = Mission.Current;
if (mission != null)
{
    array.AddElement(mission);  // Mission inherits from NativeObject
}

// Get element count
int count = array.Count;

// Get element at index
NativeObject obj = array.GetElementAt(0);

// Iterate array
foreach (NativeObject item in array)
{
    // Handle item
}

// Clear array
array.Clear();
```

### Handling Custom NativeObject Subclasses

```csharp
// Assuming YourCustomObject inherits from NativeObject
NativeObjectArray customArray = NativeObjectArray.Create();

YourCustomObject obj1 = new YourCustomObject();
YourCustomObject obj2 = new YourCustomObject();

customArray.AddElement(obj1);
customArray.AddElement(obj2);

// Note: GetElementAt returns base class NativeObject
NativeObject baseObj = customArray.GetElementAt(0);

// If you need specific type, cast it
YourCustomObject typedObj = (YourCustomObject)customArray.GetElementAt(0);
```

---

## NativeObjectArray Wrapper Class

`NativeObjectArray` is the user-friendly wrapper for `INativeObjectArray`, implements `IEnumerable<NativeObject>`:

```csharp
[EngineClass("ftdnNative_object_array")]
public sealed class NativeObjectArray : NativeObject, IEnumerable<NativeObject>, IEnumerable
{
    internal NativeObjectArray(UIntPtr pointer) : base()
    {
        Construct(pointer);
    }
    
    public static NativeObjectArray Create();
    
    public int Count { get; }
    
    public NativeObject GetElementAt(int index);
    public void AddElement(NativeObject nativeObject);
    public void Clear();
    
    // Implements IEnumerable<NativeObject>
    IEnumerator<NativeObject> IEnumerable<NativeObject>.GetEnumerator();
    IEnumerator IEnumerable.GetEnumerator();
}
```

---

## Difference from INativeArray

| Feature | INativeArray | INativeObjectArray |
|---------|--------------|-------------------|
| Element type | Primitive types (int, float, struct) | NativeObject pointers |
| Generic support | Yes (`NativeArray`) | No |
| Element access | `GetElementAt(index)` | `GetElementAt(index)` |
| Add method | `AddElement(value)` | `AddElement(nativeObject)` |

---

## Important Notes

1. **Type erasure** - `NativeObjectArray` doesn't retain specific type info
2. **Reference management** - Adding element doesn't copy object, just increments reference
3. **Enumerator** - Implements `IEnumerable`, can use foreach
4. **Null element** - `AddElement(null)` adds null pointer `UIntPtr.Zero`

---

## Related Files

| File | Description |
|------|-------------|
| `NativeObjectArray.cs` | Wrapper class implementation |
| `NativeObject.cs` | Base class |
| `INativeArray.cs` | Primitive type array interface |
| `INativeString.cs` | String interface |
