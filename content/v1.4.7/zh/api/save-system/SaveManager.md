---
title: "SaveManager"
description: "存档系统的静态门面：初始化定义上下文、检查可存档类型、执行 Save 与 Load 两条主线，并暴露 SaveFileExtension 常量。mod 手写存档文件时的唯一入口。"
---
# SaveManager

**命名空间：** `TaleWorlds.SaveSystem`
**模块：** `TaleWorlds.SaveSystem`
**类型：** `public static class SaveManager`
**基类：** 无（静态类）
**源文件：** `TaleWorlds.SaveSystem/SaveManager.cs`（声明见第 14 行）

## 概述

`SaveManager` 是 `TaleWorlds.SaveSystem` 的**静态门面**，把三条底层能力包起来：定义上下文（`DefinitionContext`）的全局初始化、可存档类型的校验、以及 `Save` / `Load` 两个主流程。它本身不持有状态——所有方法都是静态的，所有数据都通过 `ISaveDriver`（实际是文件）传入。

存档在本代由 [Game](../../core-extra/Game) 主导（`Game.Save` / `Game.LoadSaveGame`），本类就是它底下的执行引擎。mod 通常**不应该**直接调 `SaveManager.Save` 去覆盖玩家的存档——那是本作存档系统的正确用法，但用错驱动器会破坏兼容性。真正需要 mod 直接动手的场景有两个：一是导出 / 导入分析用的数据副本，二是自动化测试里造存档。

`SaveFileExtension` 是 `"sav"`——判断文件类型时用它，不要硬编码字符串。

## 心智模型

把存档看成三段：**类型定义 → 写 → 读**。

1. **定义上下文先于一切。** `InitializeGlobalDefinitionContext()` 建立全局 `DefinitionContext`，它记录了所有 `[SaveableField]` / `[SaveableTypeDefiner]` 的编号。**它必须在任何 Save/Load 之前调用**，否则存档编号无法解析。
2. **写**：`Save(target, metaData, saveName, driver)` —— `target` 是要序列化的根对象（通常是 `Game`），`metaData` 是版本 / 时间戳等元数据，`driver` 决定写到哪。返回 `SaveOutput`。
3. **读**：`Load(saveName, driver)` 返回 `LoadResult`；`Load(saveName, driver, loadAsLateInitialize)` 是延迟初始化版本。

`CheckSaveableTypes()` 是一个**诊断入口**：它扫描所有已注册的可存档类型并返回列表。排查「读档后某个字段丢失」时，先用它确认那个类型是不是真的注册了。

`ShouldResolveConflicts()` 是解冲突开关，返回 `bool`。默认关闭；打开后加载器会尝试合并定义不一致的类型——**这是排查跨版本兼容问题的工具，不是常规路径**。

## 何时使用 / 何时不要使用

- **使用**：mod 需要自己写 / 读存档数据（导出、导入、测试夹具）。
- **使用**：自定义存档元数据（往 `MetaData` 里塞 mod 版本号）。
- **使用**：`CheckSaveableTypes()` 诊断存档字段丢失。
- **不要**：不要在游戏正常运行期间用 `SaveManager.Save` 覆盖玩家的主存档——那会绕过 `Game.Save` 的元数据与回调链。
- **不要**：不要在引擎已经初始化过存档系统后再调 `InitializeGlobalDefinitionContext()`。重复初始化会重建编号表。
- **不要**：不要在没有 `ISaveDriver` 的情况下调用任何方法——驱动器是必需的 I/O 抽象。

## 成员说明

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `public const string SaveFileExtension = "sav"` | 存档文件扩展名。**判断文件类型时用它**，不要硬编码 `"sav"`。 |
| `static void InitializeGlobalDefinitionContext()` | 建立全局定义上下文（类型编号表）。**必须在任何 Save / Load 之前调用一次**。重复调用会重建编号，破坏与既有存档的对应关系。 |
| `static List<Type> CheckSaveableTypes()` | 返回所有已注册的可存档类型列表。**存档字段丢失时的第一诊断工具**：先确认类型在不在列表里。 |
| `static SaveOutput Save(object target, MetaData metaData, string saveName, ISaveDriver driver)` | 执行存档。`target` 是根对象（通常是 `Game`），`metaData` 是元数据，`driver` 是 I/O 抽象。返回 `SaveOutput`（含成功标志与错误信息）。 |
| `static bool ShouldResolveConflicts()` | 是否需要在加载时解决定义冲突。排查跨版本 / 跨 mod 的存档不兼容时打开。**非常规路径**。 |
| `static MetaData LoadMetaData(string saveName, ISaveDriver driver)` | **只读元数据，不读正文**。用于存档选择界面显示日期 / 版本——这比完整 Load 便宜得多，是 UI 的标准做法。 |
| `static LoadResult Load(string saveName, ISaveDriver driver)` | 读取存档，返回 `LoadResult`。用它配合 `Game.LoadSaveGame` 构造游戏实例。 |
| `static LoadResult Load(string saveName, ISaveDriver driver, bool loadAsLateInitialize)` | 延迟初始化版本。`loadAsLateInitialize = true` 时，行为对象在游戏初始化后才恢复——**对读档后立刻访问世界的 mod 更安全**。 |

## 示例

### 示例 1：只读元数据（存档列表 UI）

完整 `Load` 很贵；只看元数据用 `LoadMetaData`。

```csharp
using TaleWorlds.SaveSystem;

// ISaveDriver 由平台层注入（文件、内存、测试替身都实现它）。
// 它有 8 个成员：Save / GetSaveGameFileInfos / GetSaveGameFileNames /
// LoadMetaData / Load / Delete / IsSaveGameFileExists / IsWorkingAsync。
static void ShowSaveList(ISaveDriver driver, string saveName)
{
    MetaData meta = SaveManager.LoadMetaData(saveName, driver);
    if (meta == null)
    {
        return;   // 该存档不存在
    }

    // 存档列表 UI 只需要这些，不需要加载正文
    System.DateTime savedAt = meta.GetDateTime();
    string appVersion = meta.GetApplicationVersion();

    // 完整存档文件名列表同样走 driver，而不是自己拼路径
    string[] names = driver.GetSaveGameFileNames();
}
```

### 示例 2：延迟初始化读档

`loadAsLateInitialize` 让行为对象在游戏初始化后才恢复，避免半初始化世界里被访问。

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;
using TaleWorlds.SaveSystem;

LoadResult result = SaveManager.Load(saveName, driver, true);
if (result != null)
{
    // 构造游戏实例：Game 负责后续的初始化与行为恢复
    Game game = Game.LoadSaveGame(result, gameManager);
}
```

### 示例 3：诊断存档字段丢失

「读档后 mod 的字段变成默认值」时，先确认类型注册，再确认定义上下文。

```csharp
using System.Collections.Generic;
using TaleWorlds.SaveSystem;

SaveManager.InitializeGlobalDefinitionContext();

List<System.Type> saveable = SaveManager.CheckSaveableTypes();
bool registered = false;
foreach (System.Type t in saveable)
{
    if (t.Name == "MyBehavior")
    {
        registered = true;
        break;
    }
}

// registered == false 说明类型的 SaveableTypeDefiner 没被注册，
// 这是字段不入档的根因，而不是 SyncData 写错了
```

## 风险与边界

- **调用顺序是硬约束**。`InitializeGlobalDefinitionContext()` 必须在所有 Save / Load 之前；重复调用会重建编号表，让既有存档里的引用解析失败。
- **`CheckSaveableTypes()` 有成本**。它扫描全部已注册类型，属于诊断调用，不要放进 tick 或 UI 绘制路径。
- **`ShouldResolveConflicts()` 是排障开关**，打开后加载器行为改变，可能掩盖真实的版本不兼容。生产逻辑不要依赖它。
- **`Save` 覆盖玩家主存档的元数据链**。它绕过了 `Game.Save` 触发的 `OnBeforeSaveEvent` / `OnSaveStartedEvent` 之外的部分流程（尤其是 mod 挂在 `Game` 上的钩子）。mod 不该用 `SaveManager.Save` 写主存档。
- **`loadAsLateInitialize` 的取舍**。它更安全，但读取路径更长；如果你的代码在 `Load` 返回后立刻访问世界，行为对象的字段可能还没恢复。
- **`MetaData` 不可信**。它是存档文件里的数据，读取时必须判空并对版本字符串做防御性解析——存档可以被玩家编辑。
- **I/O 抽象是必需的**。`ISaveDriver` 决定存档落到文件、内存还是自定义位置；在没有 driver 的环境（某些测试 / 工具链）下调这些方法会失败。
- **单线程与原生互操作**。存档会触碰原生层与大量对象图，必须在主线程的加载 / 保存流程里执行，不能从异步任务里直接调用。

## 依赖关系

- 上游 / 提供者：
  - [Game](../../core-extra/Game) 的 `Save(...)` / `LoadSaveGame(...)` 是存档的正常入口，最终落到本类。
  - [MBSubModuleBase](../../core/MBSubModuleBase) 的 `OnBeforeSaveEvent` / `OnGameLoaded` 钩子被存档流程触发。
- 相互 / 下游：
  - [SaveContext](../SaveContext) 执行写入侧的序列化（字符串表、对象 ID 分配）。
  - [LoadContext](../LoadContext) 执行读取侧的对象图重建。
  - [Campaign](../../campaign/Campaign) 的 `SaveHandler` 负责把战役特有的对象纳入存档；Behavior 的 `SyncData` 由本类驱动的 IDataStore 完成。
  - [MBObjectManager](../../campaign-ext/MBObjectManager) 的实例注册表在读档时被重建。

## 参见

- ↑ 父级：save-system 目录下没有索引页；同目录的另外两个页面是 [SaveContext](../SaveContext) 与 [LoadContext](../LoadContext)，两者也都只有中文页（见 [缺口清单](../../../../GAPS)）。
- ↔ 相关：[SaveContext](../SaveContext) · [LoadContext](../LoadContext) · [Game](../../core-extra/Game) · [Campaign](../../campaign/Campaign) · [MBObjectManager](../../campaign-ext/MBObjectManager)