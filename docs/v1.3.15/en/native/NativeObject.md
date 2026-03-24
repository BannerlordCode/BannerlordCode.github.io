---
title: NativeObject Documentation
description: Complete documentation for native object wrapper class
---

# NativeObject

**File**: `TaleWorlds.DotNet/NativeObject.cs`  
**Namespace**: `TaleWorlds.DotNet`  
**Inheritance**: None / Base class for all native object wrappers

`NativeObject` is the abstract base class for all native C++ object wrappers. It encapsulates native pointers and manages reference counting.

## Class Definition

```csharp
public abstract class NativeObject
{
    public UIntPtr Pointer { get; private set; }
    
    internal void Construct(UIntPtr pointer);
    ~NativeObject();
    public void ManualInvalidate();
    
    public static NativeObject CreateNativeObjectWrapper(NativeObjectPointer nativeObjectPointer);
    public static T CreateNativeObjectWrapper<T>(NativeObjectPointer nativeObjectPointer) where T : NativeObject;
}
```

---

## Key Methods

### Construct

```csharp
internal void Construct(UIntPtr pointer)
```

**Purpose**: Initialize the NativeObject, set pointer and increment reference count

**Internal Logic**:
1. Set `this.Pointer = pointer`
2. Call `IManaged.IncreaseReferenceCount(this.Pointer)` to increment reference
3. Create `GCHandle` to prevent immediate GC
4. Add to `_nativeObjectKeepReferences` list, release strong ref after 10 frames

### ~NativeObject (Finalizer)

```csharp
~NativeObject()
```

**Purpose**: Finalizer automatically decrements reference count

**Important**: If object wasn't manually destroyed (`ManualInvalidate`), finalizer will auto-call `DecreaseReferenceCount` during GC

### ManualInvalidate

```csharp
public void ManualInvalidate()
```

**Purpose**: Actively destroy object, decrement reference count

**Use case**: Call when you're sure you no longer need the object, after which you shouldn't access it again

### CreateNativeObjectWrapper

```csharp
internal static NativeObject CreateNativeObjectWrapper(NativeObjectPointer nativeObjectPointer)
internal static T CreateNativeObjectWrapper<T>(NativeObjectPointer nativeObjectPointer) where T : NativeObject
```

**Purpose**: Create wrapper object from native pointer

---

## Properties

| Property | Type | Description |
|----------|------|-------------|
| Pointer | `UIntPtr` | Native object memory address |

---

## Memory Management

### Reference Counting Flow

```
NativeObject construction
    ↓
IManaged.IncreaseReferenceCount(ptr)  ← Native ref count +1
    ↓
GCHandle.Alloc(this)  ← Prevent immediate GC
    ↓
Release GCHandle after 10 frames  ← Allow GC
    ↓
GC (if unreferenced) → Finalizer → DecreaseReferenceCount(ptr)
```

### NativeObjectKeeper Internal Class

```csharp
private class NativeObjectKeeper
{
    internal int TimerToReleaseStrongRef;  // Countdown, 10 frames
    internal GCHandle gcHandle;           // Strong reference handle
}
```

**Purpose**: Ensure object won't be GC'd for certain frames, giving native side enough time to process

### Memory Management Summary

| Stage | Operation |
|-------|-----------|
| Construction | Native allocates → Increase ref count → Create GCHandle |
| In use | Ref count stays > 0 |
| After 10 frames | Release GCHandle, allow GC |
| During GC | If unreferenced → Finalizer → Decrease ref count |
| Active destruction | Call `ManualInvalidate()` → Immediately decrease ref count |

---

## Usage Examples

### Basic Usage

```csharp
// NativeObject is abstract, cannot be instantiated directly
// Native code passes pointer via NativeObjectPointer
// System automatically creates corresponding subclass instance

public class MyNativeWrapper : NativeObject
{
    internal MyNativeWrapper(UIntPtr ptr) : base()
    {
        Construct(ptr);
    }
}

// Get wrapper
MyNativeWrapper wrapper = NativeObject.CreateNativeObjectWrapper<MyNativeWrapper>(pointer);
```

### Reference Comparison

```csharp
// Pointer property is UIntPtr type
UIntPtr ptr1 = wrapper1.Pointer;
UIntPtr ptr2 = wrapper2.Pointer;

bool sameNativeObject = (ptr1 == ptr2);

// NativeObject overrides Equals and == operator
bool areEqual = wrapper1 == wrapper2;  // Compares pointer and type
```

### Active Release

```csharp
public void Cleanup()
{
    // Actively release reference
    myNativeObject.ManualInvalidate();
    myNativeObject = null;  // Recommend setting to null
}
```

---

## Important Notes

1. **Never directly access Pointer** - Unless you clearly know what you're doing
2. **Do not call ManualInvalidate twice** - Will cause ref count to go negative
3. **Zero pointer check** - Use `Pointer != UIntPtr.Zero` to check
4. **Thread safety** - Static field `_nativeObjectKeepReferences` is protected by lock

---

## Related Files

| File | Description |
|------|-------------|
| `IManaged.cs` | Reference counting management interface |
| `NativeArray.cs` | Native array wrapper |
| `NativeString.cs` | Native string wrapper |
| `NativeObjectArray.cs` | Native object array wrapper |
| `EngineClassTypeDefinition.cs` | Type definition struct |
