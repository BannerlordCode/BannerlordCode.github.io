# SaveManager

**命名空间:** TaleWorlds.SaveSystem  
**模块:** TaleWorlds.SaveSystem  
**类型:** static class

Bannerlord 存档系统的主要入口点。这个静态类提供初始化存档系统、检查可存档类型以及执行存档和读取操作的方法。

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
