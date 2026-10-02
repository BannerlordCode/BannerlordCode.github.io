---
title: "SaveContext"
description: "写入侧的序列化执行器：把对象图压成字符串表 + 对象头 + 容器三层结构，并分配稳定的对象 ID 与字符串 ID。Behavior 的 SyncData(ref) 之所以能只写字段名，是因为这里的编码器支持。"
---
# SaveContext

**命名空间：** `TaleWorlds.SaveSystem.Save`
**模块：** `TaleWorlds.SaveSystem`
**类型：** `public class SaveContext : ISaveContext`
**基类：** 无，实现 `TaleWorlds.SaveSystem.ISaveContext`
**源文件：** `TaleWorlds.SaveSystem/Save/SaveContext.cs`（声明见第 12 行）

## 概述

`SaveContext` 是存档**写入侧**的执行器。它由 [SaveManager](../SaveManager) 在 `Save` 流程中构造，接收一个 `DefinitionContext`（类型编号表），然后把整棵对象图压成三张表：

- **字符串表**（`SaveData.String`）：所有字符串值去重后集中存放，用 ID 引用。`AddOrGetStringId(string)` 负责去重与分配。
- **对象表**（`SaveData.Objects`）：每个被序列化对象一行，含类型编号与字段值。对象之间的引用靠**对象 ID** 连接。
- **容器表**（`SaveData.Containers`）：集合 / 字典的内容。

它继承的编码技巧解释了 mod 开发者最熟悉的那个 API：`dataStore.SyncData("Key", ref myField)` 之所以只需要一个字符串 key 和一个 ref 字段（而不需要类型信息），是因为**类型信息由 `DefinitionContext` 里的编号提供**，字符串 key 被翻译成字符串表里的 ID。`SaveableFieldDefiner` 之类的东西告诉 `DefinitionContext` 「这个类型第 N 个字段是什么类型」。

`SaveStatistics` 是个嵌套结构，用于统计每种类型 / 容器写了多少对象、占了多少字节——排查存档膨胀的实用工具。

## 心智模型

把 `SaveContext` 想成**「写」这一侧的真相**。mod 的心智模型应该围绕三件事：

1. **什么时候有 `SaveContext`。** 它只在存档流程内存在。你永远不会主动构造它——构造它的 `SaveManager.Save` 才会创建环境。**在自己的代码里持有 `SaveContext` 引用跨存档周期是错误的**。
2. **`AddOrGetStringId` 的去重语义。** 同一字符串被写 N 次只占一份。所以「存档体积大」通常不是字符串多，而是**对象数 / 容器数**多。统计要靠 `GetStatistics()`。
3. **`Save` 的返回值语义。** `Save(target, metaData, out string errorMessage)` 用 `out` 抛错误信息，不是异常。**必须检查 `errorMessage`**，不能假设成功。

Behavior 侧的心智模型是配对的：`SyncData(IDataStore)` 拿到的 `IDataStore` 内部就是 `SaveContext`（写档时）或 `LoadContext`（读档时）的轻量视图。所以「写出去的字段」和「读回来的字段」必须一一对应——这个对称性由 `DefinitionContext` 保证。

## 何时使用 / 何时不要使用

- **使用**：通过 `SyncData` 注册要持久化的字段（Behavior 的标准做法）。
- **使用**：用 `GetStatistics()` 排查存档体积异常。
- **使用**：在存档流程的扩展点里查询某个对象 / 容器的 ID 分配情况（`GetObjectId` / `GetContainerId` / `GetStringId`）。
- **不要**：不要自己 `new SaveContext(definitionContext)`——它假定存档流程已经建立了字符串表与定义上下文。
- **不要**：不要在 `errorMessage != null` 时忽略错误继续走——存档已处于损坏状态。
- **不要**：把 `SaveContext` 存进静态字段。

## 成员说明

### 一、状态与构造

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `public SaveContext(DefinitionContext definitionContext)` | 构造函数。**由存档流程调用**；自行构造会缺少字符串表与定义映射。 |
| `object RootObject { get; private set; }` | 本次序列化的根对象（通常是 `Game`）。 |
| `GameData SaveData { get; private set; }` | 写出的三张表（字符串 / 对象 / 容器）。 |
| `DefinitionContext DefinitionContext { get; private set; }` | 类型编号表。**构造后不可换**——它决定了 ID 的含义。 |

### 二、ID 分配

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `int AddOrGetStringId(string text)` | 把字符串加入去重表并返回 ID。同一字符串多次调用返回同一 ID。 |
| `int GetObjectId(object target)` | 查对象已分配的对象 ID。**对象尚未被序列化时行为未定义**——不要拿它当「是否已保存」的判据。 |
| `int GetContainerId(object target)` | 查容器 ID。语义同上。 |
| `int GetStringId(string target)` | 查字符串 ID，**不新建**。字符串尚未写入时返回的 ID 无意义。 |
| `static int GetStringSizeInBytes(string text)` | 估算字符串在存档里占多少字节。统计存档体积时用。 |

### 三、执行与诊断

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `bool Save(object target, MetaData metaData, out string errorMessage)` | **写入侧的主流程**。用 `out` 返回错误信息而不是抛异常——**必须检查它**。 |
| `static SaveStatistics GetStatistics()` | 返回本次序列化的统计快照。 |
| `override string ToString()` | 返回可读的诊断文本。 |

### 四、SaveStatistics 嵌套结构

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `public SaveStatistics(Dictionary<string, ValueTuple<int,int,int,long>> typeStatistics, Dictionary<string, ValueTuple<int,int,int,int,long>> containerStatistics)` | 构造统计快照（结构体）。 |
| `ValueTuple<int, int, int, long> GetObjectCounts(string key)` | 按类型查对象计数与体积。**排查「存档膨胀」的第一工具**。 |
| `ValueTuple<int, int, int, int, long> GetContainerCounts(string key)` | 按容器类型查计数与体积。 |
| `long GetContainerSize(string key)` | 某容器的总字节数。 |
| `List<string> GetTypeKeys()` / `GetContainerKeys()` | 枚举统计里的类型 / 容器键。 |

### 五、输出结构字段（属于 SaveContext 本身）

这四个 `public` 字段直接描述本次序列化写出的四段数据大小，**对比存档前后的数值就能立刻定位是哪一段变大**。

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `int HeaderSize` | 文件头段字节数。 |
| `int StringSize` | 字符串表段字节数。 |
| `int ObjectSize` | 对象表段字节数。 |
| `int ContainerSize` | 容器表段字节数。 |

## 示例

### 示例 1：用 GetStatistics 定位存档膨胀

```csharp
using TaleWorlds.SaveSystem.Save;

SaveContext.SaveStatistics stats = SaveContext.GetStatistics();

// 四段体积：哪一段变大立刻可见
System.Console.WriteLine("header=" + stats.HeaderSize
                        + " string=" + stats.StringSize
                        + " object=" + stats.ObjectSize
                        + " container=" + stats.ContainerSize);

// 逐类型看对象数
foreach (string key in stats.GetTypeKeys())
{
    var counts = stats.GetObjectCounts(key);
    System.Console.WriteLine(key + " objects=" + counts.Item1);
}
```

### 示例 2：Behavior 侧的对称读写

`SyncData` 的写入路径最终落到 `SaveContext`；读档时由 `LoadContext` 处理。**两个分支必须覆盖同一组字段**。

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.SaveSystem;

public class CounterBehavior : CampaignBehaviorBase
{
    private int _visits;
    private string _lastSettlement;

    public CounterBehavior() : base("MyMod.Counter") { }

    public override void RegisterEvents()
    {
        CampaignEvents.SettlementEntered.AddNonSerializedListener(this, OnEntered);
    }

    public override void SyncData(IDataStore dataStore)
    {
        if (dataStore.IsLoading())
        {
            _visits = dataStore.GetDataAsInt("Counter.Visits");
            _lastSettlement = dataStore.GetDataAsString("Counter.LastSettlement");
        }
        else
        {
            // 两个字段都写出去，读档时也都要读回来
            dataStore.SyncData("Counter.Visits", ref _visits);
            dataStore.SyncData("Counter.LastSettlement", ref _lastSettlement);
        }
    }

    private void OnEntered(MobileParty party, Settlement settlement, Hero hero)
    {
        _visits++;
        _lastSettlement = settlement.StringId;
    }
}
```

### 示例 3：存档流程中的字符串去重

```csharp
using TaleWorlds.SaveSystem;
using TaleWorlds.SaveSystem.Save;

SaveManager.InitializeGlobalDefinitionContext();

// SaveManager.Save 内部会构造 SaveContext；以下展示同等的 ID 分配语义
// 同一个字符串被写多次只占一份
// int idA = context.AddOrGetStringId("my_mod_flag");
// int idB = context.AddOrGetStringId("my_mod_flag");
// idA == idB

// 单个字符串的体积估算
int bytes = SaveContext.GetStringSizeInBytes("my_mod_flag");
```

## 风险与边界

- **构造函数不是 mod 的入口**。自行 `new SaveContext(definitionContext)` 会缺少存档流程已经建立好的字符串表与根对象，结果是一份不完整的存档。
- **`errorMessage` 必须检查**。`Save` 用 `out` 返回错误而不抛异常。忽略它等于在损坏的存档上继续。
- **ID 的有效期只在本次序列化内**。`GetObjectId` / `GetStringId` 返回的值在下一次存档里完全不同。**绝不能持久化这些 ID**。
- **`GetObjectId` 对未序列化对象无意义**。它不是「对象是否已入档」的判据。
- **存档体积是全局的**。多注册一个 Behavior、多加一个 `[SaveableField]`，都会让**每一个存档**变大。`GetStatistics()` 是唯一的量化手段。
- **`DefinitionContext` 决定兼容性**。改动 `[SaveableField]` 的顺序或 `[SaveableTypeDefiner]` 的编号会直接让旧档失效——这不是运行时能兜住的错误。
- **只在存档流程内存在**。把 `SaveContext` 或 `GameData` 存进静态字段，下一次存档时它指向的是已废弃的表。
- **单线程 + 原生互操作**：序列化会触碰整个对象图与原生资源引用，只能在主线程的保存流程里执行。

## 依赖关系

- 上游 / 提供者：
  - [SaveManager](../SaveManager) 在 `Save` 流程中构造本类并填充三张表。
  - [Game](../../core-extra/Game) 的 `Save(...)` 是存档的正常入口。
- 相互 / 下游：
  - [LoadContext](../LoadContext) 是配对的读取侧执行器，两者的字段编号必须一致。
  - [Campaign](../../campaign/Campaign) 的 `SaveHandler` 把战役对象纳入序列化。
  - [CampaignBehaviorBase](../../campaign/CampaignBehaviorBase) 的 `SyncData(IDataStore)` 在写档时由本类驱动的数据存储支撑。
  - [MBObjectManager](../../campaign-ext/MBObjectManager) 的对象表在序列化中被引用。

## 参见

- ↑ 父级：[save-system 索引](../)
- ↔ 相关：[SaveManager](../SaveManager) · [LoadContext](../LoadContext) · [Game](../../core-extra/Game) · [Campaign](../../campaign/Campaign) · [CampaignBehaviorBase](../../campaign/CampaignBehaviorBase)