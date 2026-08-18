---
title: "AsyncFileSaveDriver"
description: "在 FileDriver 之上包一层后台 Task 的异步磁盘驱动：把真正的写盘挪到工作线程，Save 立即返回可等待的 Task，并通过 WaitPreviousTask 顺序化多次保存，避免并发写同一 .sav。IsWorkingAsync 恒为 true。"
---

# AsyncFileSaveDriver

**Namespace：** `TaleWorlds.SaveSystem`
**Module：** `TaleWorlds.SaveSystem`
**类型：** `public class AsyncFileSaveDriver : ISaveDriver`
**Base：** `ISaveDriver`
**源文件路径：** `TaleWorlds.SaveSystem/AsyncFileSaveDriver.cs`

## 一句话职责

让存档「不卡游戏」：表面还是 `ISaveDriver`，内部把 `FileDriver` 的同步写盘扔到后台线程，`Save` 立刻返回未完成的 `Task` 给调用方 `await`；同时用 `WaitPreviousTask` 保证上一次写盘结束才开始下一次，避免并发写同一个文件。

## 概述

`AsyncFileSaveDriver` 是 `FileDriver` 的**装饰器/包装器**。构造函数里直接 `new FileDriver()` 持有一个私有实例，所有读写最终都委托给它——区别只在两件事：**异步**与**串行化**。每个接口方法都实现为显式接口方法（`Task<SaveResultWithMessage> ISaveDriver.Save(...)` 等），进入时先调用 `WaitPreviousTask()`，再委托给内部 `_saveDriver`。`Save` 用 `Task.Run` 把 `FileDriver.Save` 派发到后台线程，并把返回的 `Task` 存进 `_currentSaveTask`；因此 `IsWorkingAsync()` 返回 `true`。`WaitPreviousTask` 对上一次的 `_currentNonSaveTask` / `_currentSaveTask` 调用 `.Wait()`，也就是**阻塞当前调用线程直到上一个任务完成**——所以「异步」是指真正的磁盘 I/O 在别的线程，但调用方在派发前仍会被上一个任务卡住。

## 心智模型

- **它在哪一层：** 与 `FileDriver` 同层，只是把落盘动作移到后台线程。上游 `SaveManager` 对未完成的 `Task` 返回 `SaveOutput` 的 Continuing 状态，由调用方等待。
- **谁创建/持有它：** 游戏在热存档/自动存档时选用本驱动并注入 `SaveManager`。mod 一般不直接 `new`，但理解其生命周期很重要。
- **何时用：** 游戏内主循环里的热存档、自动存档，避免主线程卡顿。何时不要用：需要「写盘完成后再继续」的逻辑却忘记 `await` 结果——会变成基于未落盘状态的竞态。
- **关键陷阱：** `WaitPreviousTask()` 用的是阻塞式 `.Wait()`，不是 `await`；它保证串行化，但也可能在特定的同步上下文里造成死锁。

## 依赖图

- 被包装实现：[FileDriver](../FileDriver)（真正的磁盘 I/O 在这里发生）。
- 上游调用方：[SaveManager](../SaveManager) 调用 `Save` 并据 `Task` 结果决定 Continuing。
- 数据载体：[GameData](../GameData) · [MetaData](../MetaData)。
- 接口与兄弟：[ISaveDriver](../ISaveDriver) · [InMemDriver](../InMemDriver)。
- 跨模块：[Game](../../core-extra/Game) 是对象图根，`Campaign` 是其派生类。

## 风险段（线程与生命周期）

- **`WaitPreviousTask` 阻塞调用线程：** 它用 `Task.Wait()` 而非 `await`，在 UI/ASP.NET 等同步上下文里可能死锁；理解本驱动「异步」却仍会在派发前等上一个任务。
- **必须观察 `Save` 返回的 `Task`：** 若不 `await`/等待，可能在文件写完前就卸载场景或再次 `Save`。串行化只防「并发写同一文件」，不防「调用方基于未落盘状态做决策」。
- **实例生命周期：** 后台 `Task` 持有 `this` 与内部 `FileDriver`；若驱动在 `Task` 完成前被丢弃/GC，写盘可能中断或抛异常，留下半截 `.sav`。
- **与 `SaveManager` 协作：** `SaveManager.Save` 对未完成的后台写盘返回 Continuing 状态的 `SaveOutput`，必须处理该状态，不能当成功。
- **不保证原子写：** 底层仍是 `FileDriver` 直接覆盖 `.sav`，中途崩溃仍可能坏档——异步只解决卡顿，不解决原子性。

## 成员说明

### 构造与串行化

| 成员 | 说明 |
| --- | --- |
| `AsyncFileSaveDriver()` | 构造时 `new FileDriver()`，建立内部被包装实例。 |
| `void WaitPreviousTask()`（private） | 若上一次非存档/存档 `Task` 未完成则 `.Wait()` 阻塞当前线程；所有接口方法入口都会调用它以保证顺序写盘。 |

### 接口实现（均先 `WaitPreviousTask` 再委托给内部 `FileDriver`）

| 成员 | 说明 |
| --- | --- |
| `Task<SaveResultWithMessage> Save(...)` | 用 `Task.Run` 在后台线程调用 `FileDriver.Save`，返回未完成 `Task`；`SaveManager` 据此进入 Continuing。 |
| `MetaData LoadMetaData(...)` / `LoadData Load(...)` | 委托内部驱动读取；同样先等上一个任务完成。 |
| `SaveGameFileInfo[] GetSaveGameFileInfos()` / `string[] GetSaveGameFileNames()` | 委托列举。 |
| `bool Delete(...)` / `bool IsSaveGameFileExists(...)` | 委托删除/查询。 |
| `bool IsWorkingAsync()` | 恒返回 `true`。 |

## 真实示例

```csharp
// 热存档/自动存档用异步驱动，避免主线程卡顿
ISaveDriver driver = new AsyncFileSaveDriver();

// Game 对象图（Campaign 是 Game 的派生根）已交给驱动序列化
SaveOutput output = SaveManager.Save(Campaign.Current, campaignMetaData, "autosave", driver);

// SaveManager 对未完成的后台写盘会返回 Continuing 状态——
// 此时不能认为文件已落盘，必须等待后台 Task 完成，再判定 SaveResult，
// 也不能在返回瞬间就切换场景或再次 Save。
```

## 导航块

- ↑ Parent：[save-system 目录](../)
- ↔ Sibling：[FileDriver](../FileDriver) · [InMemDriver](../InMemDriver) · [ISaveDriver](../ISaveDriver) · [SaveManager](../SaveManager)
- 相关类型：[GameData](../GameData) · [MBObjectManager](../../campaign-ext/MBObjectManager/)

## 参见

- 模块索引：[save-system 目录](../)
- 上游枢纽：[SaveManager](../SaveManager)
- 相关：[FileDriver](../FileDriver) · [Game](../../core-extra/Game)
