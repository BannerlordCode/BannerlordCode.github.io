---
title: IManaged Interface
description: Reference counting and object lifecycle management interface
---

# IManaged

**File**: `TaleWorlds.DotNet/IManaged.cs`  
**Namespace**: `TaleWorlds.DotNet`  
**Attribute**: `[LibraryInterfaceBase]`

`IManaged` interface is responsible for reference counting and lifecycle management of native objects. All `NativeObject` construction and destruction interact with native code through this interface.

## Interface Definition

```csharp
[LibraryInterfaceBase]
internal interface IManaged
{
    [EngineMethod("increase_reference_count", false, null, true)]
    void IncreaseReferenceCount(UIntPtr ptr);

    [EngineMethod("decrease_reference_count", false, null, true)]
    void DecreaseReferenceCount(UIntPtr ptr);

    [EngineMethod("get_class_type_definition_count", false, null, false)]
    int GetClassTypeDefinitionCount();

    [EngineMethod("get_class_type_definition", false, null, false)]
    void GetClassTypeDefinition(int index, ref EngineClassTypeDefinition engineClassTypeDefinition);

    [EngineMethod("release_managed_object", false, null, false)]
    void ReleaseManagedObject(UIntPtr ptr);
}
```

---

## Methods

| Method | Signature | Purpose |
|--------|-----------|---------|
| IncreaseReferenceCount | `void IncreaseReferenceCount(UIntPtr ptr)` | Increment reference count |
| DecreaseReferenceCount | `void DecreaseReferenceCount(UIntPtr ptr)` | Decrement reference count |
| GetClassTypeDefinitionCount | `int GetClassTypeDefinitionCount()` | Get type definition count |
| GetClassTypeDefinition | `void GetClassTypeDefinition(int, ref EngineClassTypeDefinition)` | Get type definition |
| ReleaseManagedObject | `void ReleaseManagedObject(UIntPtr ptr)` | Release managed object |

---

## Reference Counting Mechanism

### Counting Flow

```
Application code
    ↓
new NativeObject(ptr) construction
    ↓
Construct() → IManaged.IncreaseReferenceCount(ptr)
    ↓
Native ref count +1
    ↓
Application code no longer used → GC → Finalizer
    ↓
IManaged.DecreaseReferenceCount(ptr)
    ↓
Native ref count -1 → If 0 → Release native object
```

### Usage in NativeObject

```csharp
internal void Construct(UIntPtr pointer)
{
    this.Pointer = pointer;
    LibraryApplicationInterface.IManaged.IncreaseReferenceCount(this.Pointer);
    // ... Create GCHandle
}

~NativeObject()
{
    if (!this._manualInvalidated)
    {
        LibraryApplicationInterface.IManaged.DecreaseReferenceCount(this.Pointer);
    }
}

public void ManualInvalidate()
{
    if (!this._manualInvalidated)
    {
        LibraryApplicationInterface.IManaged.DecreaseReferenceCount(this.Pointer);
        this._manualInvalidated = true;
    }
}
```

---

## Type Definition Registration

`IManaged` also handles registration of all `[EngineClass]` marked types at startup:

```csharp
static NativeObject()
{
    int classTypeDefinitionCount = LibraryApplicationInterface.IManaged.GetClassTypeDefinitionCount();
    NativeObject._typeDefinitions = new List<EngineClassTypeDefinition>();
    
    for (int i = 0; i < classTypeDefinitionCount; i++)
    {
        EngineClassTypeDefinition engineClassTypeDefinition = default(EngineClassTypeDefinition);
        LibraryApplicationInterface.IManaged.GetClassTypeDefinition(i, ref engineClassTypeDefinition);
        NativeObject._typeDefinitions.Add(engineClassTypeDefinition);
    }
    // ...
}
```

### EngineClassTypeDefinition Struct

```csharp
[EngineStruct("ftlObject_type_definition", false, null)]
internal struct EngineClassTypeDefinition
{
    public int TypeId;           // Type ID
    public string TypeName;      // Type name (128 chars)
}
```

---

## Usage Examples

### Normal Object Usage

```csharp
// Normal creation - ref count auto-incremented
Mission mission = Mission.Current;

// When no longer needed, wait for GC and Finalizer
// Or actively release
mission?.ManualInvalidate();
```

### Reference Management in Arrays

```csharp
NativeObjectArray array = NativeObjectArray.Create();

Agent agent = mission.MainAgent;
array.AddElement(agent);  // agent ref count +1 (array holds it)

// When array is cleared, element ref count -1
array.Clear();
```

### Type Query

```csharp
// Query registered type definitions
int count = LibraryApplicationInterface.IManaged.GetClassTypeDefinitionCount();

for (int i = 0; i < count; i++)
{
    EngineClassTypeDefinition def = default;
    LibraryApplicationInterface.IManaged.GetClassTypeDefinition(i, ref def);
    Console.WriteLine($"ID: {def.TypeId}, Name: {def.TypeName}");
}
```

---

## Memory Management Summary

| Scenario | Call |
|----------|------|
| NativeObject construction | `IncreaseReferenceCount` |
| NativeObject destruction (GC) | `DecreaseReferenceCount` |
| Manual destruction | `DecreaseReferenceCount` + `ManualInvalidate` |
| NativeObjectArray add | Element ref count unchanged (array holds pointer) |
| NativeObjectArray clear | Element ref count -1 |

---

## Important Notes

1. **Do not release twice** - Calling `DecreaseReferenceCount` multiple times causes count error
2. **Check pointer validity** - Use `ptr != UIntPtr.Zero` to check
3. **Thread safety** - Reference counting is guaranteed thread-safe on native side
4. **GCHandle delay** - Strong ref released 10 frames after construction, prevents premature GC

---

## Related Files

| File | Description |
|------|-------------|
| `NativeObject.cs` | Base class, uses IManaged |
| `EngineClassTypeDefinition.cs` | Type definition struct |
| `LibraryApplicationInterface.cs` | Interface registry |
