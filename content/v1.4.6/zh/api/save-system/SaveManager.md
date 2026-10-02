---
title: "SaveManager"
description: "存档流程总管：建立 DefinitionContext、收集对象图交给 ISaveDriver 落盘，并把结果包成 SaveOutput/LoadResult。"
---
# SaveManager

**Namespace:** `TaleWorlds.SaveSystem`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `public static class SaveManager`
**Base:** `System.Object`
**Source:** `TaleWorlds.SaveSystem/SaveManager.cs`

## 概述

`SaveManager` 是保存/读取流程的静态总管，它自己不认识任何游戏数据：所有工作都由它转交给三个协作者——`DefinitionContext`（类型定义表）、`ISaveContext` 实现 `SaveContext` / `LoadContext`（对象图收集与还原）、`ISaveDriver`（真正读写文件）。它额外负责三件 mod 必须知道的事：把当前应用的 `ApplicationVersion` 写进 `OperatingVersion` 供冲突解析器读取；在保存期间把 `_isLoading` 置 false、加载期间置 true（`ShouldResolveConflicts()` 直接返回它）；以及提供一个扫描全 AppDomain、找出「挂了存档特性但没有类型定义」的诊断入口 `CheckSaveableTypes()`。

它不是存档文件名的管理者（文件名由 `ISaveDriver` 决定），也不是 Behavior 私有状态的推荐入口（那应该走 `IDataStore`）。

## 心智模型

典型顺序是「先定义、再保存、后加载」：

1. `InitializeGlobalDefinitionContext()` 建表并把 `DefinitionContext.Errors` 打到 `sails.log`。这一步在 mod 的 `OnSubModuleLoad` 之后、`RegisterSubModuleObjects` 之前就已经被游戏做过了；你只有在自己额外引入了新的 definer 时才需要主动重调。
2. `Save(target, metaData, saveName, driver)`：若 `_definitionContext` 为空会懒初始化；`DefinitionContext.GotError` 为真就直接返回 `CreateFailed`，**根本不会去遍历对象图**。成功时把 `SaveContext.SaveData` 交给 `driver.Save(saveName, 1, metaData, data)`；驱动同步完成时返回成功/失败 `SaveOutput`，异步时返回 `CreateContinuing(task)`。
3. `Load(saveName, driver, loadAsLateInitialize)`：**每次调用都新建一个 `DefinitionContext`**（不复用保存时那张表），成功时 `LoadResult.Root` 是反序列化出的根对象；`loadAsLateInitialize: true` 时结果内部挂了一个 `LoadCallbackInitializator`，必须由调用方通过 `LoadResult.InitializeObjects()` / `AfterInitializeObjects()` 驱动，否则 `[LoadInitializationCallback]`（如 `Game.OnLoad`、`TextObject.OnLoad`）永远不跑。

常见误用：一是把 `Save` 当同步的——看到返回值就当作文件已落盘，实际有 `IsContinuing` 分支；二是自己拼 `DefinitionContext` 绕开 definer，导致 mod 类型没有 saveId；三是用 try/catch 吞掉 `SaveOutput` 的错误继续发版，坏档会留到玩家存档时才炸。

## 关键成员

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `SaveFileExtension` | `public const string SaveFileExtension = "sav"` | 游戏存档扩展名常量。做自定义存档槽路径拼接时用它，别硬编码。 |
| `InitializeGlobalDefinitionContext()` | `public static void InitializeGlobalDefinitionContext()` | 新建 `DefinitionContext`、调 `FillWithCurrentTypes()` 收集全部 definer，并把每条错误 `Debug.Print` 出来。**重复调用会整表重建**，旧表已收集的信息全丢。 |
| `CheckSaveableTypes()` | `public static List<Type> CheckSaveableTypes()` | 扫描 `AppDomain.CurrentDomain.GetAssemblies()` 里所有类型的所有实例字段/属性，找出带 `[SaveableField]`/`[SaveableProperty]` 但 `_definitionContext` 里没有定义的类型。返回去重后的类型列表；需要在 `InitializeGlobalDefinitionContext()` 之后调用，否则 `_definitionContext` 为 null 会抛 NRE。 |
| `Save` | `public static SaveOutput Save(object target, MetaData metaData, string saveName, ISaveDriver driver)` | 把 `target` 对象图交给 `SaveContext` 收集，再交给 `driver.Save(saveName, 1, metaData, saveContext.SaveData)`。返回 `SaveOutput`：可能是成功、失败、或 `IsContinuing`（驱动异步）。方法内部会临时把 `OperatingVersion` 设为 `metaData.GetApplicationVersion()`，结束时复位为 `ApplicationVersion.Empty`。 |
| `ShouldResolveConflicts()` | `public static bool ShouldResolveConflicts()` | 返回内部的 `_isLoading` 标志，即「当前是否在 Load 调用栈内」。这是给冲突解析器用的查询，不是 mod 的游戏状态开关。 |
| `LoadMetaData` | `public static MetaData LoadMetaData(string saveName, ISaveDriver driver)` | 直接转发 `driver.LoadMetaData(saveName)`，只读元数据不建 `LoadContext`，不碰 `_isLoading`。列存档槽、读版本号时用它。 |
| `Load` | `public static LoadResult Load(string saveName, ISaveDriver driver)` | 两参重载，等价于 `Load(saveName, driver, false)`。返回 `LoadResult`，`Root` 为还原出的根对象。 |
| `Load` | `public static LoadResult Load(string saveName, ISaveDriver driver, bool loadAsLateInitialize)` | 三参重载。新建 `DefinitionContext` 并 `FillWithCurrentTypes()`，读 `LoadData`，交给 `LoadContext.Load`。`loadAsLateInitialize` 为 true 时成功结果携带 `LoadCallbackInitializator`，需调用方后续执行。加载失败时返回 `LoadResult.CreateFailed` 带一条 `"Not implemented"` 的 `LoadError`。 |

## 真实示例

`MetaData` 与 `ISaveDriver` 由游戏的存档层提供；下面这段展示的是 mod 自己做「定义检查 → 保存 → 读回」时的实际调用形状。

```csharp
// 启动早期做一次定义体检：列出挂特性但没 definer 的类型
SaveManager.InitializeGlobalDefinitionContext();
List<Type> undefined = SaveManager.CheckSaveableTypes();
foreach (Type t in undefined)
{
    Debug.Print("Saveable type without definition: " + t.FullName, 0);
}

// 自己发起一次保存（跳过游戏 UI）
SaveOutput output = SaveManager.Save(Campaign.Current, campaignMetaData, "mod_quick_slot", saveDriver);
if (output.IsContinuing)
{
    // 驱动是异步的：这一帧还没有最终结果，别动旧档
    return;
}
if (!output.Successful)
{
    foreach (SaveError error in output.Errors)
    {
        Debug.Print("Save failed: " + error.Message, 0);
    }
}
```

带晚初始化的读档，调用方必须自己把初始化器跑完：

```csharp
LoadResult loadResult = SaveManager.Load("mod_quick_slot", saveDriver, true);
if (loadResult.Successful)
{
    Game loadedGame = (Game)loadResult.Root;
    // 晚初始化回调由 LoadResult 转发；Game.LoadSaveGame 内部也是这个顺序
    loadResult.InitializeObjects();
    MBObjectManager.Instance.ReInitialize();
    loadResult.AfterInitializeObjects();
}
```

## 风险与边界

- **静态可变状态。** `_definitionContext`、`_isLoading`、`OperatingVersion` 都是进程级静态字段。`Save` 与 `Load` 期间它们会被临时改写，嵌套调用（例如在 `OnBeforeSave` 里再触发一次保存）会互相踩。
- **定义错误会硬阻断保存。** `_definitionContext.GotError` 为真时 `Save` 直接返回 `CreateFailed`，对象图完全没被遍历。别用 try/catch 吞掉定义错误——参见 [SaveableTypeDefiner](../SaveableTypeDefiner) 里 saveId 的分配规则。
- **加载是每次重建定义表。** `Load` 不复用 `_definitionContext`，它 `new DefinitionContext()` 后再 `FillWithCurrentTypes()`。这意味着加载比保存慢，也意味着加载路径上任何 definer 抛异常都会直接失败。
- **保存可能异步。** `ISaveDriver.Save` 返回 `Task<SaveResultWithMessage>`，`IsCompleted` 为 false 时 `SaveOutput` 是 continuing 状态，此时**不要**覆盖旧档或清理中间数据。
- **晚初始化必须由你执行。** `LoadCallbackInitializator` 是 `internal`，外部拿不到，只能靠 `LoadResult.InitializeObjects()` 与 `AfterInitializeObjects()` 两个 public 方法转发。`Game` 的随机数生成器、`TextObject` 的内部 id 都靠它，漏掉会导致空引用或 id 冲突。
- **`ShouldResolveConflicts()` 不是业务状态。** 它只是 `_isLoading` 的读出口。`OperatingVersion` 是 `internal`，外部程序集读不到，别试图反射依赖它。
- **存档兼容由 mod 自己负责。** 官方类型的 typeId/memberId 表会随版本增长；mod 只要加了自己的 `SaveableTypeDefiner` 子类和 `[SaveableField]`/`[SaveableProperty]`，就必须自己保证跨版本 id 稳定。

## 跨版本提示

用 `bannerlord-1.3.15/` 与 `bannerlord-1.4.6/` 的 `TaleWorlds.SaveSystem/SaveManager.cs` 逐行比对，**public 表面完全一致**：`.sav` 常量、`InitializeGlobalDefinitionContext`、`CheckSaveableTypes`、四参 `Save`、两参/三参 `Load`、`LoadMetaData`、`ShouldResolveConflicts` 全都在，签名一字未改。

**1.4.5 侧结论**：打开 `bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.SaveSystem/TaleWorlds.SaveSystem/SaveManager.cs`（174 行）与 `bannerlord-1.4.6/TaleWorlds.SaveSystem/SaveManager.cs`（201 行）逐成员比对 public/protected 表面。**三版 public 表面完全一致（各 8 个成员，0 新增 / 0 移除 / 0 签名变化 / 0 可访问性变化）** —— 本段上文说「不是『一致』，是没能实际核对」，该保留意见**现已撤销**：1.4.5 的 `SaveManager.cs` 里 `.sav` 常量、`InitializeGlobalDefinitionContext`、`CheckSaveableTypes`、四参 `Save`、两参/三参 `Load`、`LoadMetaData`、`ShouldResolveConflicts` 的签名与 1.4.6 逐个一致。

**为什么这份源码之前被判为「不存在」**：`bannerlord-1.4.5/` 的 C# 源码在 `Bannerlord.Source/bin/` 下**双层嵌套** `bin/<Assembly>/<Assembly>/<Type>.cs`，而 `bin/` 的一层里没有任何 `.cs`（实测 `find bannerlord-1.4.5/Bannerlord.Source/bin -maxdepth 1 -name "*.cs"` 命中 0），只扫一层就会误判成无源码。**1.4.5 是原始源码形态**（file-scoped namespace、无 `// Token:` 注释），1.4.6 与 1.3.15 是反编译产物，所以两边的行数不可直接比大小。

## 依赖关系

- 定义层：[SaveableTypeDefiner](../SaveableTypeDefiner) · [SaveableFieldAttribute](../SaveableFieldAttribute) · [SaveablePropertyAttribute](../SaveablePropertyAttribute)
- 调用方之一：[Game](../../core-extra/Game) 的 `Save(...)` 内部就是转发到 `SaveManager.Save`
- 状态栈：[GameStateManager](../../core-extra/GameStateManager) 决定存档 UI 处于哪个状态

- 上一级：[v1.4.6 内容根](../../../)
