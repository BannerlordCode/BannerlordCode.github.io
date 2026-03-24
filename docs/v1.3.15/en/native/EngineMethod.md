---
title: EngineClass and EngineMethod Attributes
description: Documentation for native type and method mapping attributes
---

# EngineClass and EngineMethod

**EngineClass File**: `TaleWorlds.DotNet/EngineClass.cs`  
**EngineMethod File**: `TaleWorlds.Library/EngineMethod.cs`  
**EngineBaseClass File**: `TaleWorlds.DotNet/EngineBaseClass.cs`

These two attributes are the core of Bannerlord's native interop layer, used to map C# types/methods to native C++ functions.

---

## EngineClass

**Purpose**: Mark C# class corresponding to native C++ type

### Definition

```csharp
[AttributeUsage(AttributeTargets.Class, AllowMultiple = false)]
public class EngineClass : EngineBaseClass
{
    public EngineClass(string engineType) : base(engineType) { }
}

public abstract class EngineBaseClass : Attribute
{
    public string EngineType { get; set; }
}
```

### Usage Example

```csharp
// TaleWorlds.DotNet/NativeArray.cs
[EngineClass("ftdnNative_array")]
public sealed class NativeArray : NativeObject
{
    // ...
}

// TaleWorlds.DotNet/NativeString.cs
[EngineClass("ftdnNative_string")]
public sealed class NativeString : NativeObject
{
    // ...
}

// TaleWorlds.DotNet/NativeObjectArray.cs
[EngineClass("ftdnNative_object_array")]
public sealed class NativeObjectArray : NativeObject
{
    // ...
}
```

### Internal Mechanism

`NativeObject` static constructor scans all assemblies to collect `[EngineClass]` marked types:

```csharp
static NativeObject()
{
    // Get native type definition count
    int classTypeDefinitionCount = LibraryApplicationInterface.IManaged.GetClassTypeDefinitionCount();
    
    // Iterate all native type definitions
    for (int i = 0; i < classTypeDefinitionCount; i++)
    {
        EngineClassTypeDefinition engineClassTypeDefinition = default;
        LibraryApplicationInterface.IManaged.GetClassTypeDefinition(i, ref engineClassTypeDefinition);
        _typeDefinitions.Add(engineClassTypeDefinition);
    }
    
    // Scan C# assemblies for [EngineClass] types
    foreach (Assembly assembly in AppDomain.CurrentDomain.GetAssemblies())
    {
        if (DoesNativeObjectDefinedAssembly(assembly))  // Must reference TaleWorlds.DotNet
        {
            foreach (Type type in assembly.GetTypes())
            {
                if (type.GetCustomAttributesSafe(typeof(EngineClass), false).Length == 1)
                {
                    // Match C# type with native type definition
                    int typeDefinitionId = GetTypeDefinitionId(engineClass.EngineType);
                    if (typeDefinitionId != -1)
                    {
                        // Register constructor
                        ConstructorInfo constructor = type.GetConstructor(52, null, new Type[] { typeof(UIntPtr) }, null);
                        _constructors[typeDefinitionId] = constructor;
                    }
                }
            }
        }
    }
}
```

### Purpose

1. **Type mapping** - Associate C# class with native type
2. **Auto wrapping** - `NativeObject.CreateNativeObjectWrapper<T>()` creates correct type from native pointer
3. **Reflection registration** - Build type mapping table at system startup

---

## EngineMethod

**Purpose**: Mark interface method corresponding to native function

### Definition

```csharp
[AttributeUsage(AttributeTargets.Method, AllowMultiple = false)]
public class EngineMethod : Attribute
{
    public EngineMethod(
        string engineMethodName,
        bool activateTelemetryProfiling = false,
        string[] conditionals = null,
        bool isMonoInline = false
    );
    
    public string EngineMethodName { get; private set; }
    public bool ActivateTelemetryProfiling { get; private set; }
    public string[] Conditionals { get; private set; }
    public bool IsMonoInline { get; private set; }
}
```

### Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| engineMethodName | `string` | Required | Native function name |
| activateTelemetryProfiling | `bool` | `false` | Enable telemetry profiling |
| conditionals | `string[]` | `null` | Conditional compilation symbols |
| isMonoInline | `bool` | `false` | Inline (Mono) |

### Usage Example

```csharp
// INativeArray.cs
[LibraryInterfaceBase]
internal interface INativeArray
{
    [EngineMethod("get_data_pointer_offset", false, null, false)]
    int GetDataPointerOffset();

    [EngineMethod("create", false, null, false)]
    NativeArray Create();

    [EngineMethod("get_data_size", false, null, false)]
    int GetDataSize(UIntPtr pointer);
    
    // ...
}

// IManaged.cs
[LibraryInterfaceBase]
internal interface IManaged
{
    [EngineMethod("increase_reference_count", false, null, true)]
    void IncreaseReferenceCount(UIntPtr ptr);

    [EngineMethod("decrease_reference_count", false, null, true)]
    void DecreaseReferenceCount(UIntPtr ptr);
    
    // ...
}
```

---

## Combined Usage

```csharp
// Interface definition - mark methods
[LibraryInterfaceBase]  // Mark as native interface
internal interface INativeString
{
    [EngineMethod("create", false, null, false)]
    NativeString Create();
    
    [EngineMethod("get_string", false, null, false)]
    string GetString(NativeString nativeString);
    
    [EngineMethod("set_string", false, null, false)]
    void SetString(NativeString nativeString, string newString);
}

// Implementation class - mark type
[EngineClass("ftdnNative_string")]  // Associate native type
public sealed class NativeString : NativeObject
{
    // Use interface methods
    public static NativeString Create()
    {
        return LibraryApplicationInterface.INativeString.Create();
    }
    
    public string GetString()
    {
        return LibraryApplicationInterface.INativeString.GetString(this);
    }
}
```

---

## Call Flow

```
User code
    ↓
NativeString.Create()
    ↓
LibraryApplicationInterface.INativeString.Create()
    ↓
[EngineMethod("create")] attribute looks up native function
    ↓
Call "create" function in TaleWorlds.Native.dll
```

---

## Related Files

| File | Description |
|------|-------------|
| `EngineClass.cs` | Class attribute definition |
| `EngineBaseClass.cs` | Base attribute class |
| `EngineMethod.cs` | Method attribute definition |
| `LibraryInterfaceBase.cs` | Interface marker attribute |
| `NativeObject.cs` | Base class using these attributes |
| `INativeArray.cs` | Interface example using these attributes |
