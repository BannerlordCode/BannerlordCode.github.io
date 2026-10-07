---
title: "SaveContext"
description: "单次保存的遍历与编号上下文：从 RootObject 出发收集对象图、分配 ID、序列化成 GameData，是 SaveManager 与 ISaveDriver 之间的桥梁。"
---
# SaveContext

**Namespace:** `TaleWorlds.SaveSystem.Save`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `public class SaveContext : ISaveContext`
**Source:** `TaleWorlds.SaveSystem/Save/SaveContext.cs`

> 节 schema：本页采用 7 节（按出现顺序）：概述 / 心智模型 / 怎么用 / 关键成员 / 真实示例 / 参见 / 导航

## 概述

`SaveContext` 是**单次保存操作的遍历与编号上下文**。它从 `RootObject` 出发，递归遍历整个对象图，为每个对象、容器、字符串分配唯一 ID，最终把遍历结果序列化成 `GameData`（头部 + 字符串表 + 对象数据 + 容器数据四段字节流）。它是 `SaveManager` 与 `ISaveDriver` 之间的桥梁：`SaveManager` 创建 `SaveContext` 并调 `Save`，`SaveContext` 产出 `GameData`，`SaveManager` 再把 `GameData` 交给 `ISaveDriver` 落盘。

它实现 `ISaveContext` 接口，该接口定义了对象图遍历的契约：`GetObjectId`、`GetContainerId`、`GetStringId`、`AddOrGetStringId`。这些方法在遍历过程中被 `ObjectSaveData` 和 `ContainerSaveData` 回调，用于「这个对象/容器/字符串之前见过吗？见过的话 ID 是多少？没见过的话分配一个新 ID」。

## 心智模型

**`SaveContext` 是「对象图的遍历器 + ID 分配器」，不是「存档格式的定义者」也不是「字节流的写入者」。**

- 它**不定义**哪些类型能存——那是 `SaveableTypeDefiner` 的事，`SaveContext` 只消费 `DefinitionContext` 已经建好的类型定义表。
- 它**不写文件**——那是 `ISaveDriver` 的事，`SaveContext` 只产出 `GameData`（四段字节流的打包结果）。
- 它**不决定**存档文件名——那是 `SaveManager` 与 `ISaveDriver` 的事。

**遍历流程。** `Save(target, metaData, out errorMessage)` 是入口（`SaveContext.cs:276`）。它做四件事：
1. `CollectObjects()` 从 `RootObject` 出发 BFS 遍历对象图，把每个对象/容器/字符串登记到 `_childObjects` / `_childContainers` / `_strings` 三个列表，同时建立 `对象 → ID` 的映射字典。
2. `CollectSaveDatas()` 为每个对象/容器创建 `ObjectSaveData` / `ContainerSaveData`，收集它们的字段、属性、字符串引用。
3. `WriteObjects()` / `WriteContainers()` 把每个 `ObjectSaveData` / `ContainerSaveData` 序列化成字节数组。
4. `WriteHeaders()` / `WriteAllStrings()` 写头部与字符串表，最终打包成 `GameData`。

**ID 分配语义。** 每个对象/容器/字符串在遍历过程中分配一个**从 0 开始的连续整数 ID**。`_idsOfChildObjects` 是 `Dictionary<object, int>`，键是对象引用，值是 ID。`GetObjectId(target)` 查这个字典，找不到会 `Debug.FailedAssert`（`SaveContext.cs:219`）。`AddOrGetStringId(text)` 是字符串专用的「查或加」方法（`SaveContext.cs:188`），它用 `_locker` 保证线程安全，因为 `CollectSaveDatas` 是并行跑的。

**并行安全。** `CollectSaveDatas` 和 `WriteObjects` / `WriteContainers` 都用 `TWParallel.ForWithoutRenderThread` 并行处理。这意味着 `ObjectSaveData` 和 `ContainerSaveData` 的收集与序列化必须是线程安全的——它们通过 `Interlocked.Add` 累加大小统计，通过 `_locker` 保护字符串字典。

## 怎么用

### 怎么拿到

`SaveContext` 通常由 `SaveManager.Save` 内部创建，mod 侧一般不直接 new 它。但如果你需要自定义保存流程（比如只保存对象图的一个子集），可以直接用：

```csharp
using TaleWorlds.SaveSystem;
using TaleWorlds.SaveSystem.Save;
using TaleWorlds.SaveSystem.Definition;

// 需要先有 DefinitionContext（通常由 SaveManager.InitializeGlobalDefinitionContext 建立）
DefinitionContext defCtx = SaveManager.InitializeGlobalDefinitionContext();

// 创建 SaveContext
SaveContext ctx = new SaveContext(defCtx);

// 执行保存
string errorMsg;
bool ok = ctx.Save(target, metaData, out errorMsg);   // SaveContext.cs:276

if (ok)
{
    GameData data = ctx.SaveData;   // SaveContext.cs:22，四段字节流的打包结果
    // 交给 ISaveDriver 落盘
}
```

### 典型用法

```csharp
using TaleWorlds.SaveSystem;
using TaleWorlds.SaveSystem.Save;

// 场景：mod 想保存一个自定义对象子图
public void SaveSubGraph(object subRoot, MetaData metaData, ISaveDriver driver)
{
    // 1. 确保定义表已建立
    SaveManager.InitializeGlobalDefinitionContext();

    // 2. 创建 SaveContext 并执行保存
    SaveContext ctx = new SaveContext(SaveManager.DefinitionContext);
    string errorMsg;
    bool ok = ctx.Save(subRoot, metaData, out errorMsg);

    if (!ok)
    {
        Debug.Print("Save failed: " + errorMsg, 0);
        return;
    }

    // 3. 把 GameData 交给 driver 落盘
    // 注意：实际落盘由 SaveManager.Save 包装，这里只是展示 SaveContext 的产出
    GameData data = ctx.SaveData;
}
```

### 坑

- **`DefinitionContext` 不能为 null。** `SaveContext` 构造函数接收 `DefinitionContext`，如果传 null，后续 `CollectContainerObjects` 调 `DefinitionContext.GetContainerDefinition` 会 NRE。
- **`Save` 是实例方法，不是静态方法。** `SaveContext.cs:276` 的 `Save` 是实例方法，必须先 new 一个 `SaveContext`。
- **`GetObjectId` 找不到对象会断言失败。** 如果你在 `ObjectSaveData` 收集过程中引用了一个不在 `_childObjects` 里的对象，`GetObjectId` 会 `Debug.FailedAssert`（`SaveContext.cs:219`）。这通常意味着对象图遍历有 bug。
- **`EnableSaveStatistics` 默认是 false。** `SaveContext.cs:37` 的 `EnableSaveStatistics` 是 `public static bool`，默认 false。设为 true 会启用类型/容器级别的统计，但会显著拖慢保存速度。

## 关键成员

### 属性与状态

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `RootObject` | `public object RootObject { get; private set; }` | 保存的根对象。`Save` 方法的第一行就是 `this.RootObject = target;`（`SaveContext.cs:276`） |
| `SaveData` | `public GameData SaveData { get; private set; }` | 保存产出的四段字节流打包结果。`Save` 成功后由 `SaveContext.cs:276` 赋值 |
| `DefinitionContext` | `public DefinitionContext DefinitionContext { get; private set; }` | 类型定义表。构造函数注入，后续遍历依赖它查类型定义 |
| `EnableSaveStatistics` | `public static bool EnableSaveStatistics` | 是否启用类型/容器级别统计。默认 false（`SaveContext.cs:37`）。设为 true 会显著拖慢保存 |

### 遍历与收集

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `Save` | `public bool Save(object target, MetaData metaData, out string errorMessage)` | 执行保存的入口。从 `target` 出发遍历对象图，产出 `GameData`。返回是否成功（`SaveContext.cs:276`） |

### ID 分配与查询

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `AddOrGetStringId` | `public int AddOrGetStringId(string text)` | 字符串专用的「查或加」方法。用 `_locker` 保证线程安全（`SaveContext.cs:188`） |
| `GetObjectId` | `public int GetObjectId(object target)` | 查对象 ID。找不到会 `Debug.FailedAssert`（`SaveContext.cs:219`） |
| `GetContainerId` | `public int GetContainerId(object target)` | 查容器 ID（`SaveContext.cs:231`） |
| `GetStringId` | `public int GetStringId(string target)` | 查字符串 ID。null 返回 -1（`SaveContext.cs:237`） |

### 统计与诊断

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `GetStatistics` | `public static SaveContext.SaveStatistics GetStatistics()` | 获取类型/容器级别的统计信息（`SaveContext.cs:30`） |
| `SaveDataSizeRecord` | `private struct SaveDataSizeRecord` | 大小统计结构体，含 `HeaderSize` / `StringSize` / `ObjectSize` / `ContainerSize` |
| `SaveStatistics` | `public struct SaveStatistics` | 统计结果结构体，含 `GetObjectCounts` / `GetContainerCounts` / `GetContainerSize` / `GetTypeKeys` / `GetContainerKeys`（`SaveContext.cs:613`） |
| `HeaderSize` | `public int HeaderSize` | 头部大小统计（`SaveContext.cs:600`） |
| `StringSize` | `public int StringSize` | 字符串表大小统计（`SaveContext.cs:603`） |
| `ObjectSize` | `public int ObjectSize` | 对象数据大小统计（`SaveContext.cs:606`） |
| `ContainerSize` | `public int ContainerSize` | 容器数据大小统计（`SaveContext.cs:609`） |
| `GetContainerSize` | `public long GetContainerSize(string key)` | 获取指定容器的总大小（`SaveContext.cs:639`） |
| `GetTypeKeys` | `public List<string> GetTypeKeys()` | 获取所有类型键（`SaveContext.cs:645`） |
| `GetContainerKeys` | `public List<string> GetContainerKeys()` | 获取所有容器键（`SaveContext.cs:651`） |

**取舍判据**：`SaveContext` 有 30+ 个成员，按功能分组列出。故意略过的成员：`_temporaryCollectedObjects`（纯内部临时列表）、`_locker`（纯内部锁对象）、`_typeStatistics` / `_containerStatistics`（纯内部统计字典）、以及所有 `private` 的 `Collect*` / `Write*` 方法（纯内部实现，mod 不需要直接引用）。

## 真实示例

下面展示 `SaveContext` 在 `SaveManager.Save` 内部的实际调用形状：

```csharp
using TaleWorlds.SaveSystem;
using TaleWorlds.SaveSystem.Save;
using TaleWorlds.SaveSystem.Definition;

// 场景：理解 SaveManager.Save 内部如何使用 SaveContext
public void HowSaveManagerUsesSaveContext(object target, MetaData metaData, ISaveDriver driver)
{
    // 1. SaveManager 确保 DefinitionContext 已建立
    SaveManager.InitializeGlobalDefinitionContext();

    // 2. SaveManager 创建 SaveContext（伪代码，实际在 SaveManager.Save 内部）
    SaveContext ctx = new SaveContext(SaveManager.DefinitionContext);

    // 3. 执行保存
    string errorMsg;
    bool ok = ctx.Save(target, metaData, out errorMsg);

    if (ok)
    {
        // 4. 拿到 GameData
        GameData data = ctx.SaveData;

        // 5. 交给 driver 落盘（实际由 SaveManager.Save 包装）
        // driver.Save(saveName, 1, metaData, data);
    }
}
```

## 参见

- [`../SaveManager`](../SaveManager) —— 存档流程总管，创建 `SaveContext` 并调 `Save`。
- [`../ISaveDriver`](../ISaveDriver) —— 存档后端抽象，接收 `SaveContext` 产出的 `GameData` 落盘。
- [`../SaveableTypeDefiner`](../SaveableTypeDefiner) —— 存档类型定义基类，`SaveContext` 消费它建好的 `DefinitionContext`。
- [`../_index`](../_index) —— `save-system` 桶全类型索引。

## 导航

- 同桶：[`../SaveManager`](../SaveManager) · [`../ISaveDriver`](../ISaveDriver) · [`../SaveableTypeDefiner`](../SaveableTypeDefiner)
- 父索引：[`../_index`](../_index)
