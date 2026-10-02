---
title: "SaveManager"
description: "存档系统入口：构建全局 DefinitionContext、执行保存与读取、扫描未注册的存档类型。mod 自定义可存档类型时先在这里验证。"
---

# SaveManager

**Namespace:** TaleWorlds.SaveSystem
**Module:** TaleWorlds.SaveSystem
**Type:** `public static class SaveManager`
**Base:** 无（静态类）
**Source:** `bannerlord-1.5.3/TaleWorlds.SaveSystem/SaveManager.cs`

## 概述

`SaveManager` 是存档系统的门面，8 个成员加一个扩展名常量。它负责构建**全局类型定义上下文**（哪些类型可存、字段 id 是什么、冲突怎么解）、把对象图序列化到 [ISaveDriver](../ISaveDriver)、以及在读取时重建对象图。它是静态类，全局只有一个 `DefinitionContext`。mod 引入新的可存档类型时，它提供 `CheckSaveableTypes()` 这个自查工具。

## 心智模型

**定义期（`InitializeGlobalDefinitionContext`）**

```csharp
_definitionContext = new DefinitionContext();
_definitionContext.FillWithCurrentTypes();   // 反射扫描已加载程序集里的 SaveableTypeDefiner
foreach (var err in _definitionContext.Errors) Debug.Print(err);   // 定义冲突在这里冒头
```

`GotError` 为真时，`Save` 直接返回失败结果（`SaveOutput.CreateFailed(errors, SaveResult.GeneralFailure)`），**不会**尝试写盘。错误来源通常是 save id 冲突或未注册的类型。

**保存期（`Save(target, metaData, saveName, driver)`）**

新建一个 [SaveContext](../SaveContext)（带同一个 `DefinitionContext`）→ `saveContext.Save(target, metaData, out errorMessage)` → 成功后 `driver.Save(saveName, 1, metaData, saveContext.SaveData)`。驱动返回 `Task<SaveResultWithMessage>`。

**读取期（`Load(saveName, driver)`）**

驱动读出 `LoadData` → 构造 LoadContext → 解析对象图 → `LoadResult`。`Load(saveName, driver, loadAsLateInitialize)` 是「延迟初始化」变体，行为实例会在更晚的阶段被填充。

**常见误用与坑**

1. **`_definitionContext` 是懒初始化的**：为 null 时 `Save` 内部会自己调 `InitializeGlobalDefinitionContext()`。但 `InitializeGlobalDefinitionContext` 是在你**新注册了 definer 之后**才有意义的——如果你在游戏运行中才注册新类型，不会被重新扫描。
2. **save id 必须全局唯一**。同一个类型被两个 definer 用同一个 id 注册 → `DefinitionContext.GotError` → 存档直接失败。这是 mod 之间最经典的存档互斥原因。
3. **`Save` 是同步阻塞的**（内部等 `driver.Save` 的 Task）。别在 tick 里手动触发存档。
4. **`CheckSaveableTypes()` 返回「有 `[SaveableField]` 但类型没定义」的清单**。开发期拿它当 lint 用，比等存档失败再查快得多。

## 成员与调用时机

- `static void InitializeGlobalDefinitionContext()`：重建全局类型定义上下文。**在注册新的 `SaveableTypeDefiner` 之后、第一次存档之前调用**。游戏启动时已自动调用过一次。
- `static List<Type> CheckSaveableTypes()`：反射扫描所有已加载程序集，返回「字段/属性带 `[SaveableField]`/`[SaveableProperty]` 但其类型没有定义」的类型清单。返回空列表说明定义完整。**纯诊断用**，正常运行时不调用。
- `static SaveOutput Save(object target, MetaData metaData, string saveName, ISaveDriver driver)`：保存。`target` 是根对象（通常是整个战役数据对象）。返回 `SaveOutput`（含成功/失败与错误列表）。**不要在每帧或快速存档热路径里手动调用**。
- `static bool ShouldResolveConflicts()`：是否启用冲突解析器。由定义上下文配置决定，返回 false 时读档遇到 id 冲突会失败而不是尝试修复。
- `static MetaData LoadMetaData(string saveName, ISaveDriver driver)`：只读存档头（版本、时间等），**不解对象图**。存档列表界面用它。
- `static LoadResult Load(string saveName, ISaveDriver driver)`：读档，返回 `LoadResult`。
- `static LoadResult Load(string saveName, ISaveDriver driver, bool loadAsLateInitialize)`：延迟初始化读档。行为对象在稍后的阶段才被填内容，配合 `SyncData` 的读取分支。
- `const string SaveFileExtension = "sav"`：存档扩展名。拼路径时用它，别硬编码。

## 真实示例

```csharp
// 开发期自检：我的类型是不是都注册了
protected override void OnSubModuleLoad()
{
    base.OnSubModuleLoad();
    SaveManager.InitializeGlobalDefinitionContext();
    List<Type> missing = SaveManager.CheckSaveableTypes();   // 返回 List<Type>
    if (missing.Count > 0)
        Debug.Print("unregistered saveable types: " + missing.Count);
}

// 触发一次手动存档（仅调试 / 自定义按钮）
// 签名：Save(object target, MetaData metaData, string saveName, ISaveDriver driver)
// SaveOutput 有三个可读成员：Result(SaveResult)、Errors(SaveError[])、Successful(bool)
MetaData metaData = new MetaData();
metaData.Add("MyModVersion", "1.0");
SaveOutput output = SaveManager.Save(gameData, metaData, "manual_save", driver);
if (output == null || !output.Successful)
    Debug.Print("save failed: " + output.Errors.Length + " errors, result=" + output.Result);

// 读档前先看元数据，不构建对象图
// MetaData 的真实成员：Add / TryGetValue / this[key] / Keys / Count / Serialize / Deserialize
MetaData info = SaveManager.LoadMetaData("manual_save", driver);
if (info != null && info.TryGetValue("MyModVersion", out string value))
    Debug.Print("saved by MyMod " + value);
```

## 风险与边界

- **存档兼容性是硬约束**：`SaveableField(id)` 的 id 一旦发布就不能改（改了等于换字段）。新增字段要用新 id，不能复用。
- **类型必须注册才能存**：`[SaveableField]` 指向一个没有在 `SaveableTypeDefiner` 里定义的类型，存档会失败或丢字段。`CheckSaveableTypes()` 是唯一的前置检查手段。
- **id 空间分配**：`SaveableTypeDefiner` 的 `saveBaseId` 决定你的号段。官方 behavior 用 80000 段；mod 应该选一个明显远离官方的号段，并与其他 mod 协调（见 [SaveableTypeDefiner](../SaveableTypeDefiner) 页）。
- **同步阻塞**：`Save` 内部等驱动 Task。在主线程频繁调用会掉帧。官方只在明确的存档点调用。
- **静态状态**：`SaveManager` 无实例，跨战役共享。读档中途切战役是未定义行为。

## 依赖关系

- [SaveContext](../SaveContext) — `Save` 内部构造它来做实际序列化
- [ISaveDriver](../ISaveDriver) — 读写字节流的抽象，模组可替换存储后端
- [SaveableTypeDefiner](../SaveableTypeDefiner) — 类型定义的注册入口，`CheckSaveableTypes` 检查的就是它
- [CampaignBehaviorManager](../../campaign-ext/CampaignBehaviorManager) — 通过 `OnBeforeSaveEvent` 把 behavior 数据收进存档