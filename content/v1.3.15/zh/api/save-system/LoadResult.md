---
title: "LoadResult"
description: "由 SaveManager.Load 在加载完成后返回的「报告」对象：携带重建出的根对象（Root）、是否成功、全部 LoadError 与读回的 MetaData；当以延迟初始化模式加载时，还提供 InitializeObjects / AfterInitializeObjects 驱动加载回调。"
---

# LoadResult

**命名空间：** `TaleWorlds.SaveSystem.Load`
**模块：** `TaleWorlds.SaveSystem`
**类型：** `public class LoadResult`
**基类/Base：** `System.Object`
**源文件路径/Source：** `TaleWorlds.SaveSystem/Load/LoadResult.cs`

## 一句话职责

一次加载调用落幕后给你的报告：成功时给出重建出来的对象图根（Root）与存档元数据（MetaData），失败时给出全部 [LoadError](../LoadError)；延迟初始化模式下它还握有回调执行器，由你来决定何时跑 `[LoadInitializationCallback]`。

## 概述

`LoadResult` 是加载流程的终点产物，由 [SaveManager](../SaveManager) 的 `Load` 方法构造：`CreateSuccessful(root, metaData, loadCallbackInitializator)` 在 [LoadContext](../LoadContext) 整条管线跑通（`Load` 返回 `true`）时返回，把根对象（通常是 `Campaign` / `Game` 对象图根）、读回的 [MetaData](../MetaData) 以及（可选）一个 `LoadCallbackInitializator` 一并塞进来；`CreateFailed` 在 `Load` 返回 `false` 时返回，附带一条 `LoadError`（源码里目前写死 `"Not implemented"`）。它自身是轻量载体，真正的对象重建发生在 [LoadContext](../LoadContext) 与 [ObjectLoadData](../ObjectLoadData) / [ContainerLoadData](../ContainerLoadData) 里。它的两个动作方法 `InitializeObjects` 与 `AfterInitializeObjects` 只是把调用转发给内部持有的 `LoadCallbackInitializator`——而该初始化器**只在 `loadAsLateInitialize = true` 时被设置**，否则为 `null`。

## 心智模型

把 `LoadResult` 想成体检中心的「报告单」：你（[SaveManager](../SaveManager)）把存档文件交进去，中心（[LoadContext](../LoadContext)）做完一堆检查后递回这张单子——正面是重建出的身体（[Game](../../core-extra/Game) 对象图根 `Root`），背面是异常项（`Errors`），底部附体检当天的元数据（`MetaData`）。如果这次体检选了「出报告后再通知复诊（late initialize）」，单子背面还夹着一个复诊执行器，由你决定何时打电话（`InitializeObjects` / `AfterInitializeObjects`）；否则复诊执行器是空的，乱拨号码会直接空指针。它属于加载系统的**出口层**，应在 `SaveManager.Load` 返回后读取，不要在加载管线进行中当状态用。

**何时用：** 调用 `SaveManager.Load` 之后，用 `Successful` 决定能否接管游戏，用 `Root` 拿到重建出的根对象，用 `Errors` 报告失败，或在延迟初始化模式下用两个回调方法触发 `[LoadInitializationCallback]`。

**何时不要用：**
- 不要在非延迟初始化加载（`SaveManager.Load(name, driver)` 默认 `loadAsLateInitialize = false`）后调用 `InitializeObjects` / `AfterInitializeObjects`——此时内部 `LoadCallbackInitializator` 为 `null`，会 `NullReferenceException`。
- 不要拿 `Root` 当「已完全初始化」的对象——若用了延迟初始化，跨对象引用要等 `InitializeObjects` 跑完才可靠。
- 不要把 `LoadResult` 当存档句柄长期持有——它只是一次性报告；真正的对象图已经在 `Root` 里「活」着了。

## 依赖图

- 上游产出：[SaveManager](../SaveManager) 的 `Load(saveName, driver[, loadAsLateInitialize])` 是唯一构造入口，内部通过 [LoadContext](../LoadContext) 完成对象图重建后调用 `CreateSuccessful` / `CreateFailed`。
- 根对象来源：`Root` 来自 [LoadContext](../LoadContext) 的 `RootObject`，其类型通常是 [Game](../../core-extra/Game) 或 `Campaign`。
- 元数据：`MetaData` 由驱动从存档读回（见 [MetaData](../MetaData)），承载版本号等键值。
- 回调执行器：`InitializeObjects` / `AfterInitializeObjects` 转发给 `LoadCallbackInitializator`（由 [LoadContext](../LoadContext) 在延迟模式下创建）。
- 对称角色：保存侧对应 [SaveOutput](../SaveOutput)；整条加载管线见 [存档系统总览](../../../architecture/save-system)。

## 风险段

- **误调回调方法会空指针。** 只有 `SaveManager.Load(saveName, driver, loadAsLateInitialize: true)` 才会给 `LoadResult` 装上 `LoadCallbackInitializator`。默认（非延迟）加载下它是 `null`，调用 `InitializeObjects()` / `AfterInitializeObjects()` 直接 `NullReferenceException`。
- **`Errors` 在成功时为 `null`。** 只有失败路径才填充；先判 `Successful` 再枚举，否则 `NullReferenceException`。
- **`Root` / `MetaData` 在失败时均为 `null`。** 失败实例未赋值根对象与元数据；接管游戏前务必先判 `Successful`，否则对着 `null` 的根对象操作会崩。
- **失败错误文案无信息量。** 当前 `CreateFailed` 写死了一条 `LoadError("Not implemented")`——它只表示「`LoadContext.Load` 返回了 false」，真实异常已被 [LoadContext](../LoadContext) 的 `try/catch` 吞掉并打印到 `Debug`。排查坏档要从日志而非 `Errors` 入手。
- **元数据缺失即版本不兼容信号。** 若 `MetaData` 为 `null` 或 `GetApplicationVersion()` 与当前版本差距过大，应在接管前做版本校验，避免用新代码跑旧档导致字段错位。

## 成员说明

### 结果载体

- `object Root { get; private set; }`：重建出的对象图根，通常可强转为 [Game](../../core-extra/Game) 或 `Campaign`。失败时 `null`。读取时机：确认 `Successful` 后。
- `bool Successful { get; private set; }`：整条 [LoadContext](../LoadContext) 管线是否成功。判成功用这一个。
- `LoadError[] Errors { get; private set; }`：失败原因数组；成功时为 `null`。注意当前失败文案固定为 `"Not implemented"`。
- `MetaData MetaData { get; private set; }`：读回的存档元数据（版本号、模组信息等键值）；失败时 `null`。

### 工厂方法（引擎内部）

- `static LoadResult CreateSuccessful(object root, MetaData metaData, LoadCallbackInitializator loadCallbackInitializator)`：置 `Root`、标记 `Successful = true`、存 `MetaData` 与回调初始化器。
- `static LoadResult CreateFailed(IEnumerable<LoadError> errors)`：置 `Successful = false` 并把错误序列化为数组。

### 回调驱动（仅延迟初始化模式有效）

- `void InitializeObjects()`：转发给 `_loadCallbackInitializator.InitializeObjects()`，执行所有 `[LoadInitializationCallback]` 的初始化阶段。若 `_loadCallbackInitializator` 为 `null`（非延迟加载）则 `NullReferenceException`。
- `void AfterInitializeObjects()`：转发给 `_loadCallbackInitializator.AfterInitializeObjects()`，执行初始化后的收尾阶段。同样要求延迟初始化模式。

## 真实示例

加载入口是 [SaveManager](../SaveManager)。默认模式直接给回重建好的根对象；延迟初始化模式则需要你手动触发回调：

```csharp
ISaveDriver driver = new SaveGameFileInfo();

// 真实获取路径：SaveManager.Load 返回 LoadResult
LoadResult result = SaveManager.Load("MySave_001", driver);

if (!result.Successful)
{
    // Errors 在失败时才有值（当前固定为 "Not implemented"，真因看日志）
    for (int i = 0; i < result.Errors.Length; i++)
        Debug.Print("[加载失败 " + i + "] " + result.Errors[i].Message);
}
else
{
    Game game = (Game)result.Root;     // 重建出的对象图根
    MetaData meta = result.MetaData;    // 存档元数据，含版本号
    // meta.GetApplicationVersion() 可用于版本兼容性校验
}
```

延迟初始化（需要跨对象回调时）：

```csharp
LoadResult late = SaveManager.Load("MySave_001", driver, loadAsLateInitialize: true);
if (late.Successful)
{
    Game game = (Game)late.Root;
    late.InitializeObjects();        // 触发 [LoadInitializationCallback] 初始化阶段
    late.AfterInitializeObjects();   // 收尾阶段（仅延迟模式安全）
}
```

## 导航块

- 父级：[存档系统 API 索引](../)
- 同级：[SaveOutput](../SaveOutput) · [LoadContext](../LoadContext) · [ObjectLoadData](../ObjectLoadData)
- 相关：[SaveManager](../SaveManager) · [LoadError](../LoadError) · [MetaData](../MetaData) · [存档系统总览](../../../architecture/save-system)

## 参见

- 模块索引：[存档系统 API 索引](../)
- 上游枢纽：[SaveManager](../SaveManager)
- 关联类型：[GameData](../GameData) · [LoadError](../LoadError) · [ObjectLoadData](../ObjectLoadData) · [Game](../../core-extra/Game)
