---
title: "SaveContext"
description: "保存阶段的上下文：遍历带 SaveableField/SaveableProperty 的对象图、分配对象与字符串 id、产出 GameData，并报告存档完整性漂移。"
---

# SaveContext

**Namespace:** TaleWorlds.SaveSystem.Save
**Module:** TaleWorlds.SaveSystem
**Type:** `public class SaveContext : ISaveContext`
**Base:** 实现 `ISaveContext`
**Source:** `bannerlord-1.5.3/TaleWorlds.SaveSystem/Save/SaveContext.cs`

## 概述

`SaveContext` 是**保存时**的工作上下文：它拿到一份 `DefinitionContext`（类型定义，由 [SaveableTypeDefiner](../SaveableTypeDefiner) 生成），从根对象出发遍历整个对象图，为每个对象 / 容器 / 字符串分配唯一 id，最终产出可直接写盘的 `GameData`。它只负责**写**——读档是镜像的 `LoadContext`。它的 id 分配表（对象 id、字符串 id、容器 id）是存档体积的主要决定因素。

## 心智模型

- **构造**：`SaveContext(DefinitionContext definitionContext)`。构造函数预分配了 5 个 131072 容量的集合（子对象列表 + id 字典、字符串列表 + id 字典、子容器列表 + id 字典），这是性能优化，不是硬上限。
- **主流程**：`Save(object target, MetaData metaData, out string errorMessage)` → 递归收集 → `SaveData`。成功返回 `true`。
- **id 三层**：对象 id（`GetObjectId`）、容器 id（`GetContainerId`）、字符串 id（`GetStringId` / `AddOrGetStringId`）。**字符串是去重的**——同内容只存一次，这是存档压缩的主要手段之一。
- **漂移报告**：`ReportSaveIntegrityDrift(string message)` 收集最多 4 条告警并 `Debug.FailedAssert`。它在「对象图里出现了定义上下文没覆盖的类型」时触发——也就是你漏注册 definer 的现场证据。

**常见误用与坑**

1. **手工 new `SaveContext`**。它需要正确的 `DefinitionContext`，而且结果必须经 [SaveManager](../SaveManager) 的流程使用。正常路径是 `SaveManager.Save` 内部构造。
2. **id 复用导致体积暴涨**。字符串去重的前提是 `AddOrGetStringId` 被正确使用；绕过它直接写字符串会让存档膨胀。
3. **看到 `FailedAssert` 就以为存档失败**：它是**警告路径**，收集满 4 条才停。通常意味着某个字段类型没注册——去跑 `SaveManager.CheckSaveableTypes()`。
4. **`RootObject` 与 `SaveData` 只在保存期间有效**：保存结束后 `SaveData` 被交给驱动写盘，此后不该再读。

## 怎么用

### 怎么拿到它

你从不自己 new：全代码库唯一构造点是 `SaveManager.Save` 里那一句 `new SaveContext(SaveManager._definitionContext)`（`SaveManager.cs:90`），紧接着就 `saveContext.Save(target, metaData, out text2)`（`SaveManager.cs:92`），成功后把 `saveContext.SaveData` 交给 driver（`:96`）。所以它的生命周期只有一次存档那么长。

内部流水线在 `Save(object target, MetaData metaData, out string errorMessage)`（`SaveContext.cs:298`）里，顺序固定：记 `RootObject = target`（`:309`）→ `CollectObjects()`（`:312`）→ 分配对象/容器数组（`:313-314`）→ `CollectSaveDatas()`（`:317`）→ `WriteObjects()` / `WriteContainers()`（`:318-319`）→ `WriteHeaders` + `WriteAllStrings`（`:320-321`）→ `SaveData = new GameData(array3, array4, array, array2)`（`:322`）。

构造函数就预分配了五个各 131072 容量的集合（`:64-69`）——这是 mod 加字段时最直接的内存开销来源。`CollectSaveDatas()` 会用 `TWParallel.ForWithoutRenderThread(..., 16)` 并行遍历对象与容器（`:85-91`、`:105-111`），所以它内部**会看到非主线程**。

### 典型用法

```csharp
// 1) 正常路径：由 SaveManager 驱动，mod 只需要能回答「我这份数据有多脏」
var ctx = new SaveContext(new DefinitionContext());
string error;
bool ok = ctx.Save(myRootObject, metaData, out error);
if (ok)
{
    GameData data = ctx.SaveData;      // SaveContext.cs:22
    Debug.Print("objects=" + data.ObjectData.Length + " containers=" + data.ContainerData.Length);
}

// 2) 写侧只写，读侧不写：用 IDataStore.IsSaving/IsLoading 分支（IDataStore.cs:13/17）
if (dataStore.IsSaving) counter = 0;
dataStore.SyncData("mymod_counter", ref counter);      // 唯一签名：IDataStore.cs:9

// 3) 确认这份 GameData 写得对不对
Debug.Print("total=" + data.TotalSize + " equalToSelf=" + data.IsEqualTo(data));

// 4) 性能统计默认关闭
Debug.Print(SaveContext.EnableSaveStatistics);   // SaveContext.cs:52-58 硬编码返回 false
```

### 最容易踩的坑

在存档过程中调用 `ReportSaveIntegrityDrift` 指望它抛异常。实现只做了两件事：`Debug.Print` 一行，然后在 `lock` 里把消息存进列表、**但只保留前 4 条**（`SaveContext.cs:31-33`），最后调 `Debug.FailedAssert`（`:36`）——正式构建里不抛。后果是你在 debug 构建里靠断言发现「旧存档缺字段」，发布后那条提示就彻底消失，第 5 条之后的消息连记录都没有。想让自己也知道存档里有哪些字段读不回来，就自己在 `SyncData` 里往 `dataStore` 之外的地方写一行日志，别依赖这个计数器。

## 成员与调用时机

- `SaveContext(DefinitionContext definitionContext)`：绑定类型定义。由 `SaveManager.Save` 调用。
- `bool Save(object target, MetaData metaData, out string errorMessage)`：**主入口**。`target` 是根对象。返回 `false` 时 `errorMessage` 有原因。
- `GameData SaveData { get; private set; }`：序列化结果，交给 `ISaveDriver.Save`。
- `object RootObject { get; private set; }`：根对象引用。
- `DefinitionContext DefinitionContext { get; private set; }`：类型定义。
- `int GetObjectId(object target)` / `int GetContainerId(object target)` / `int GetStringId(string target)`：查询已分配的 id。
- `int AddOrGetStringId(string text)`：**字符串入表**。返回 id；同内容重复调用返回同一个 id。这是控制存档体积的主要 API。
- `static int GetStringSizeInBytes(string text)`：估算字符串占用字节。调优存档体积时用。
- `void ReportSaveIntegrityDrift(string message)`：报告完整性漂移（未注册类型等）。上限 4 条。
- `static SaveContext.SaveStatistics GetStatistics()` / `static bool EnableSaveStatistics`：保存统计（类型数、容器数）。`EnableSaveStatistics` 在 1.5.3 里恒为 `false`，统计接口实际不生效。
- `public struct SaveStatistics`：统计结果结构。

## 真实示例

```csharp
// 正常路径：交给 SaveManager，不自己 new
MetaData metaData = new MetaData();
SaveOutput output = SaveManager.Save(gameData, metaData, "my_save", driver);
if (output == null || !output.Success)
    Debug.Print("save failed: " + output.Errors.Count);

// 调优视角：统计字符串与容器开销（诊断存档体积）
Debug.Print("string bytes = " + SaveContext.GetStringSizeInBytes(CampaignData.LocationTavern));

// 想直接观察序列化行为时（仅调试），自己构造一个上下文
var definitionContext = new DefinitionContext();
definitionContext.FillWithCurrentTypes();
var ctx = new SaveContext(definitionContext);
string error;
if (ctx.Save(rootObject, metaData, out error))
    Debug.Print("serialized, string pool bytes = " + ctx.SaveData.Strings.Length);
else
    Debug.Print("save error: " + error);
```

## 风险与边界

- **定义完整性是硬依赖**：`DefinitionContext` 缺任何被引用的类型，保存就失败或丢数据。这是 `ReportSaveIntegrityDrift` 存在的理由。
- **内存占用高**：五个集合各预分配 131072 容量。一个超大战役对象图会显著吃内存（存档期间的峰值内存）。
- **单次使用**：一次保存一个 `SaveContext`。不要跨存档复用（内部状态会累积）。
- **版本兼容靠字段 id**：`SaveableField(id)` 的 id 变了，读出来就是别的字段。改版只加不改。
- **统计接口在 1.5.3 关闭**：`EnableSaveStatistics` 硬编码返回 `false`，别指望 `GetStatistics()` 给性能数据。

## 依赖关系

- [SaveManager](../SaveManager) — 构造并驱动本类，把 `SaveData` 交给驱动写盘
- [SaveableTypeDefiner](../SaveableTypeDefiner) — 定义 `DefinitionContext` 的内容，决定哪些字段能被收集
- [ISaveDriver](../ISaveDriver) — 接收 `SaveData` 与 `MetaData` 并落盘
- [CampaignBehaviorBase](../../campaign/CampaignBehaviorBase) — 存档数据的最大来源之一，通过 `SyncData` 把状态写进对象图