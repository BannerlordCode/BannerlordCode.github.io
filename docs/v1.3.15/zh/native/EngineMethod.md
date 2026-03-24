---
title: EngineClass 与 EngineMethod 特性
description: 原生类型和方法映射特性文档 / Documentation for native type and method mapping attributes
---

# EngineClass 与 EngineMethod

**EngineClass 文件**: `TaleWorlds.DotNet/EngineClass.cs`  
**EngineMethod 文件**: `TaleWorlds.Library/EngineMethod.cs`  
**EngineBaseClass 文件**: `TaleWorlds.DotNet/EngineBaseClass.cs`

这两个特性是 Bannerlord 原生互层的核心，用于将 C# 类型/方法映射到原生 C++ 函数。

These two attributes are the core of Bannerlord's native interop layer, used to map C# types/methods to native C++ functions.

---

## EngineClass

** Purpose**: 标记 C# 类对应原生 C++ 类型  
** Purpose**: Mark C# class corresponding to native C++ type

### 定义 / Definition

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

### 使用示例 / Usage Example

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

### 内部机制 / Internal Mechanism

`NativeObject` 静态构造时扫描所有程序集，收集 `[EngineClass]` 标记的类型：

```csharp
static NativeObject()
{
    // 获取原生类型定义数量
    int classTypeDefinitionCount = LibraryApplicationInterface.IManaged.GetClassTypeDefinitionCount();
    
    // 遍历所有原生类型定义
    for (int i = 0; i < classTypeDefinitionCount; i++)
    {
        EngineClassTypeDefinition engineClassTypeDefinition = default;
        LibraryApplicationInterface.IManaged.GetClassTypeDefinition(i, ref engineClassTypeDefinition);
        _typeDefinitions.Add(engineClassTypeDefinition);
    }
    
    // 扫描 C# 程序集中的 [EngineClass] 类型
    foreach (Assembly assembly in AppDomain.CurrentDomain.GetAssemblies())
    {
        if (DoesNativeObjectDefinedAssembly(assembly))  // 必须是引用 TaleWorlds.DotNet 的程序集
        {
            foreach (Type type in assembly.GetTypes())
            {
                if (type.GetCustomAttributesSafe(typeof(EngineClass), false).Length == 1)
                {
                    // 匹配 C# 类型和原生类型定义
                    int typeDefinitionId = GetTypeDefinitionId(engineClass.EngineType);
                    if (typeDefinitionId != -1)
                    {
                        // 注册构造函数
                        ConstructorInfo constructor = type.GetConstructor(52, null, new Type[] { typeof(UIntPtr) }, null);
                        _constructors[typeDefinitionId] = constructor;
                    }
                }
            }
        }
    }
}
```

### 用途 / Purpose

1. **类型映射** - 将 C# 类与原生类型关联
2. **自动包装** - `NativeObject.CreateNativeObjectWrapper<T>()` 根据原生指针创建正确类型
3. **反射注册** - 系统启动时建立类型映射表

---

## EngineMethod

**Purpose**: 标记接口方法对应原生函数  
**Purpose**: Mark interface method corresponding to native function

### 定义 / Definition

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

### 参数说明 / Parameters

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| engineMethodName | `string` | 必需 | 原生函数名称 |
| activateTelemetryProfiling | `bool` | `false` | 是否启用遥测分析 |
| conditionals | `string[]` | `null` | 条件编译符号 |
| isMonoInline | `bool` | `false` | 是否内联 (Mono) |

### 使用示例 / Usage Example

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

## 特性组合使用 / Combined Usage

```csharp
// 接口定义 - 标记方法
[LibraryInterfaceBase]  // 标记为原生接口
internal interface INativeString
{
    [EngineMethod("create", false, null, false)]
    NativeString Create();
    
    [EngineMethod("get_string", false, null, false)]
    string GetString(NativeString nativeString);
    
    [EngineMethod("set_string", false, null, false)]
    void SetString(NativeString nativeString, string newString);
}

// 实现类 - 标记类型
[EngineClass("ftdnNative_string")]  // 关联原生类型
public sealed class NativeString : NativeObject
{
    // 使用接口方法
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

## 调用流程 / Call Flow

```
用户代码
    ↓
NativeString.Create()
    ↓
LibraryApplicationInterface.INativeString.Create()
    ↓
[EngineMethod("create")] 特性查找原生函数
    ↓
调用 TaleWorlds.Native.dll 中的 "create" 函数
```

---

## 相关文件 / Related Files

| 文件 | 说明 |
|------|------|
| `EngineClass.cs` | 类特性定义 |
| `EngineBaseClass.cs` | 基特性类 |
| `EngineMethod.cs` | 方法特性定义 |
| `LibraryInterfaceBase.cs` | 接口标记特性 |
| `NativeObject.cs` | 使用这些特性的基类 |
| `INativeArray.cs` | 使用这些特性的接口示例 |
