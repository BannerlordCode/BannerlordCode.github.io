<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SaveManager`
- [← 本领域 / 返回 save-system](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SaveManager

**命名空间:** TaleWorlds.SaveSystem  
**模块:** TaleWorlds.SaveSystem  
**类型:** static class

Bannerlord 存档系统的主要入口点。这个静态类提供初始化存档系统、检查可存档类型以及执行存档和读取操作的方法。


<!-- BEGIN DEV-USE-CASES -->

## 开发用例 / Developer Use Cases

### 用例 1: 标记类为可存档

**场景**: mod 自定义类需要在存档中持久化。

```csharp
[SaveableClass]
public class MyModData
{
    [SaveableProperty(1)] public int Gold { get; set; }
    [SaveableField(2)] private string _name;
}
```

**要点**: 类用 `[SaveableClass]`；属性用 `[SaveableProperty(id)]`，字段用 `[SaveableField(id)]`；`id` 在同类内必须唯一且稳定（不要在版本更新中复用已删除的 id）。

### 用例 2: 保存游戏状态

**场景**: mod 触发手动存档（如关键事件后）。

```csharp
MetaData meta = new MetaData();
meta["ModVersion"] = "1.0.0";
SaveOutput result = SaveManager.Save(
    Campaign.Current, meta, "mysave", SaveGameDriver);
if (result.Success) { /* 存档成功 */ }
```

**要点**: `target` 通常是 `Campaign.Current`；`saveName` 不带扩展名；错误不抛异常，检查 `result.Success`。

### 用例 3: 仅读取存档元数据

**场景**: 在加载完整存档前，先检查版本兼容性。

```csharp
MetaData meta = SaveManager.LoadMetaData("mysave", SaveGameDriver);
if (meta != null && meta.TryGetValue("ModVersion", out string ver))
{
    // 检查版本兼容
}
```

**要点**: `LoadMetaData` 比 `Load` 快得多，只读文件头；返回 `null` 表示文件不存在。

### 用例 4: 加载存档

**场景**: 恢复之前保存的游戏状态。

```csharp
LoadResult result = SaveManager.Load("mysave", SaveGameDriver);
if (result.Success)
{
    // result.LoadData() 完成反序列化
}
```

**要点**: `Load` 返回 `LoadResult`；`loadAsLateInitialize: true` 用于分帧加载大存档。

<!-- END DEV-USE-CASES -->


## 概述

SaveManager 处理高级别的存档/读取工作流程。它管理跟踪所有可存档类型的定义上下文，与驱动程序协调进行文件 I/O，并提供类型检查工具。

## 常量

| 名称 | 类型 | 值 | 描述 |
|------|------|-------|-------------|
| SaveFileExtension | string | `"sav"` | 存档文件的扩展名 |

## 静态属性

| 名称 | 类型 | 描述 |
|------|------|-------------|
| OperatingVersion | ApplicationVersion | 存档/读取操作期间运行的游戏版本 |

## 静态方法

### InitializeGlobalDefinitionContext

```csharp
public static void InitializeGlobalDefinitionContext()
```

初始化全局定义上下文。此方法必须在任何存档操作之前调用。它创建一个新的 DefinitionContext 并用当前程序集域中的所有类型填充它。类型注册期间遇到的任何错误都会打印到调试输出。

### CheckSaveableTypes

```csharp
public static List<Type> CheckSaveableTypes()
```

扫描当前 AppDomain 中的所有程序集，查找具有 `[SaveableField]` 或 `[SaveableProperty]` 属性但缺少类型定义的类型。返回需要注册的类型列表。

### Save

```csharp
public static SaveOutput Save(
    object target, 
    MetaData metaData, 
    string saveName, 
    ISaveDriver driver
)
```

将对象图保存到文件。

**参数:**
- `target` - 要保存的根对象
- `metaData` - 要包含在存档文件中的元数据
- `saveName` - 存档文件名（不带扩展名）
- `driver` - 处理文件 I/O 的存档驱动程序

**返回:** 一个 `SaveOutput` 对象，指示成功、失败或继续状态。

**抛出:** 不会抛出。错误被捕获在返回的 SaveOutput 中。

### LoadMetaData

```csharp
public static MetaData LoadMetaData(string saveName, ISaveDriver driver)
```

仅从存档文件加载元数据，而不加载完整的游戏状态。

**参数:**
- `saveName` - 存档文件名
- `driver` - 处理文件 I/O 的存档驱动程序

**返回:** 存档文件中的元数据对象。

### Load

```csharp
public static LoadResult Load(string saveName, ISaveDriver driver)
public static LoadResult Load(string saveName, ISaveDriver driver, bool loadAsLateInitialize)
```

加载已保存的游戏文件。

**参数:**
- `saveName` - 存档文件名
- `driver` - 处理文件 I/O 的存档驱动程序
- `loadAsLateInitialize` - 如果为 true，则延迟调用回调以供手动调用

**返回:** 一个 `LoadResult` 对象，包含根对象和元数据。

### ShouldResolveConflicts

```csharp
public static bool ShouldResolveConflicts()
```

**返回:** 如果当前正在加载存档，则为 true，否则为 false。类型解析器可以使用此方法来处理版本兼容性。

## 使用示例

```csharp
// 存档前初始化
SaveManager.InitializeGlobalDefinitionContext();

// 保存游戏
var metaData = new MetaData();
metaData.SetApplicationVersion(currentVersion);
var output = SaveManager.Save(myGameState, metaData, "MySave", fileDriver);

if (output.Result == SaveResult.Success)
{
    Console.WriteLine("游戏保存成功");
}

// 加载游戏
var loadResult = SaveManager.Load("MySave", fileDriver);
if (loadResult.Success)
{
    var loadedGame = loadResult.RootObject;
}
```

## 参见

- [SaveableRootClassAttribute](./SaveAttributes.md)
- [SaveablePropertyAttribute](./SaveAttributes.md)
- [SaveableFieldAttribute](./SaveAttributes.md)
- [SaveContext](./SaveContext.md)
- [LoadContext](./LoadContext.md)
