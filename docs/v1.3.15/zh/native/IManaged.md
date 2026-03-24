---
title: IManaged 接口
description: 引用计数和对象生命周期管理接口 / Reference counting and object lifecycle management
---

# IManaged

**文件**: `TaleWorlds.DotNet/IManaged.cs`  
**命名空间**: `TaleWorlds.DotNet`  
**特性**: `[LibraryInterfaceBase]`

`IManaged` 接口负责原生对象的引用计数和生命周期管理。所有 `NativeObject` 的构造和销毁都通过此接口与原生代码交互。

`IManaged` interface manages reference counting and lifecycle of native objects. All `NativeObject` construction and destruction interact with native code through this interface.

## 接口定义 / Interface Definition

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

## 方法列表 / Methods

| 方法 | 签名 | 用途 |
|------|------|------|
| IncreaseReferenceCount | `void IncreaseReferenceCount(UIntPtr ptr)` | 增加引用计数 |
| DecreaseReferenceCount | `void DecreaseReferenceCount(UIntPtr ptr)` | 减少引用计数 |
| GetClassTypeDefinitionCount | `int GetClassTypeDefinitionCount()` | 获取类型定义数量 |
| GetClassTypeDefinition | `void GetClassTypeDefinition(int, ref EngineClassTypeDefinition)` | 获取类型定义 |
| ReleaseManagedObject | `void ReleaseManagedObject(UIntPtr ptr)` | 释放托管对象 |

---

## 引用计数机制 / Reference Counting Mechanism

### 计数流程 / Counting Flow

```
应用代码
    ↓
new NativeObject(ptr) 构造
    ↓
Construct() → IManaged.IncreaseReferenceCount(ptr)
    ↓
原生引用计数 +1
    ↓
应用代码不再使用 → GC → Finalizer
    ↓
IManaged.DecreaseReferenceCount(ptr)
    ↓
原生引用计数 -1 → 如果为0 → 释放原生对象
```

### NativeObject 中的使用 / Usage in NativeObject

```csharp
internal void Construct(UIntPtr pointer)
{
    this.Pointer = pointer;
    LibraryApplicationInterface.IManaged.IncreaseReferenceCount(this.Pointer);
    // ... 创建 GCHandle
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

## 类型定义注册 / Type Definition Registration

`IManaged` 还负责在启动时注册所有 `[EngineClass]` 标记的类型：

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

### EngineClassTypeDefinition 结构

```csharp
[EngineStruct("ftlObject_type_definition", false, null)]
internal struct EngineClassTypeDefinition
{
    public int TypeId;           // 类型ID
    public string TypeName;      // 类型名称 (128字符)
}
```

---

## 使用示例 / Usage Examples

### 正常对象使用 / Normal Object Usage

```csharp
// 正常创建 - 引用计数自动增加
Mission mission = Mission.Current;

// 当不再使用时，等待 GC 和 Finalizer
// 或主动释放
mission?.ManualInvalidate();
```

### 对象数组的引用管理 / Reference Management in Arrays

```csharp
NativeObjectArray array = NativeObjectArray.Create();

Agent agent = mission.MainAgent;
array.AddElement(agent);  // agent 引用计数 +1 (数组持有)

// 数组清空时，元素引用计数 -1
array.Clear();
```

### 类型查询 / Type Query

```csharp
// 查询已注册的类型定义
int count = LibraryApplicationInterface.IManaged.GetClassTypeDefinitionCount();

for (int i = 0; i < count; i++)
{
    EngineClassTypeDefinition def = default;
    LibraryApplicationInterface.IManaged.GetClassTypeDefinition(i, ref def);
    Console.WriteLine($"ID: {def.TypeId}, Name: {def.TypeName}");
}
```

---

## 内存管理总结 / Memory Management Summary

| 场景 | 调用 |
|------|------|
| NativeObject 构造 | `IncreaseReferenceCount` |
| NativeObject 销毁 (GC) | `DecreaseReferenceCount` |
| 手动销毁 | `DecreaseReferenceCount` + `ManualInvalidate` |
| NativeObjectArray 添加 | 元素引用计数不变（数组持有指针） |
| NativeObjectArray 清空 | 元素引用计数 -1 |

---

## 注意事项 / Important Notes

1. **不要重复释放** - 多次调用 `DecreaseReferenceCount` 导致计数错误
2. **检查指针有效性** - 使用 `ptr != UIntPtr.Zero` 检查
3. **线程安全** - 引用计数在原生端保证线程安全
4. **GCHandle 延迟** - 构造后10帧才释放强引用，防止过早 GC

---

## 相关文件 / Related Files

| 文件 | 说明 |
|------|------|
| `NativeObject.cs` | 基类，使用 IManaged |
| `EngineClassTypeDefinition.cs` | 类型定义结构体 |
| `LibraryApplicationInterface.cs` | 接口注册表 |
