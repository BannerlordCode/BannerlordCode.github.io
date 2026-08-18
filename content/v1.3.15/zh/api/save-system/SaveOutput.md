---
title: "SaveOutput"
description: "由 SaveManager.Save 在保存完成后返回的「收据」对象：携带本次写盘的 GameData、最终结果（SaveResult）、全部 SaveError，以及是否仍在后台异步续写（IsContinuing）。用 PrintStatus 把错误清单打印到调试日志。"
---

# SaveOutput

**命名空间：** `TaleWorlds.SaveSystem.Save`
**模块：** `TaleWorlds.SaveSystem`
**类型：** `public class SaveOutput`
**基类/Base：** `System.Object`
**源文件路径/Source：** `TaleWorlds.SaveSystem/Save/SaveOutput.cs`

## 一句话职责

一次保存调用落幕后给你的回执：成功时给出本次写盘的 [GameData](../GameData)，失败时给出全部 [SaveError](../SaveError) 与失败原因枚举，并告诉你后台写盘任务是否还在飞。

## 概述

`SaveOutput` 是保存流程的终点产物，由 [SaveManager](../SaveManager) 的 `Save` 方法在三种情况下构造：`CreateSuccessful` 在驱动（`ISaveDriver`）已同步完成且结果为 `Success` 时返回，附带 `SaveContext.SaveData`；`CreateFailed` 在定义上下文报错、驱动写盘失败或抛异常时返回，附带 [SaveError](../SaveError) 数组与对应 `SaveResult`；`CreateContinuing` 在驱动返回尚未完成的 `Task<SaveResultWithMessage>` 时返回，内部挂一个 continuation 把最终结果回填进 `Result`。它本身是不可变的（所有 setter 均为 `private`），唯一的副作用动作是 `PrintStatus`，负责把结果打印到调试输出。它不持有任何游戏状态，只是对「这次保存到底怎样了」的快照。

## 心智模型

把 `SaveOutput` 想成超市收银台的「小票」：你（[SaveManager](../SaveManager)）把整辆购物车的对象图交给收银员（`SaveContext` + 驱动），结束后他递回这张小票——上面写着成功与否、写盘的数据块（[GameData](../GameData)）、以及哪里出错。`Successful` 是「交易成功」章；`Errors` 是退货/异常清单；`IsContinuing` 表示收银员还在后台打包（异步写盘未结束），此时 `Result` 尚无意义。它属于保存系统的**出口层**，只在 `SaveManager.Save` 返回后短暂存活，你读完它就该丢掉，不要在下一帧还拿着它当状态用。

**何时用：** 调用 `SaveManager.Save` 之后，用 `Successful` 决定后续流程，用 `Errors` 给用户/日志报告失败原因，或用 `PrintStatus` 在开发期快速定位保存错误。

**何时不要用：**
- 不要在保存进行中（驱动异步写盘）假设 `Result` 已是终态——先查 `IsContinuing`，或调用 `PrintStatus`（它会 join 后台任务再读 `Result`）。
- 不要把 `SaveOutput` 当存档句柄长期持有——它只是一次性回执，真正的存档数据在 [GameData](../GameData) 与驱动落地的文件里。
- 不要试图从 `Data` 反推游戏对象——成功时 `Data` 只是序列化后的字节容器，不是活的对象图。

## 依赖图

- 上游产出：[SaveManager](../SaveManager) 的 `Save(target, metaData, saveName, driver)` 是唯一构造入口，内部视结果调用 `CreateSuccessful` / `CreateFailed` / `CreateContinuing`。
- 数据载体：成功时持有的 `Data` 来自 [SaveContext](../SaveContext) 的 `SaveData`，其类型为 [GameData](../GameData)。
- 错误类型：失败时数组元素为 [SaveError](../SaveError)（与 [LoadError](../LoadError) 是加载侧对应物）。
- 关联流程：整条保存管线见 [存档系统总览](../../../architecture/save-system)。

## 风险段

- **成功路径下 `Errors` 为 `null`。** 只有失败的 `CreateFailed` 才会填充 `Errors`；成功实例里它是空引用。务必先判 `Successful` 再枚举 `Errors`，否则 `NullReferenceException`。
- **`Data` 在失败时也是 `null`。** 失败实例未赋值 `Data`，读取前同样要先判 `Successful`。
- **`IsContinuing` 为真时 `Result` 无效。** 此时后台写盘任务未结束，`Result` 仍是构造初值；若需终态，调用 `PrintStatus()` 让它 `ContinueWith` 回填，或直接 `await` 驱动返回的 `Task`（注意 `SaveOutput` 本身不暴露该 `Task`）。
- **`GeneralFailure` 可能吞掉真实异常。** `CreateFailed` 在 `catch (Exception ex)` 分支只用 `ex.Message` 生成一条 [SaveError](../SaveError)；磁盘满、驱动内部异常等会被压成一条文本，排查时需结合 `PrintStatus` 的完整输出。

## 成员说明

### 身份与结果

- `GameData Data { get; private set; }`：成功时本次写盘的存档数据（头部/定义段/对象数据/容器数据/字符串的字节容器）；失败时为 `null`。副作用：无，只是引用回传。
- `SaveResult Result { get; private set; }`：保存结果枚举（`Success` / `GeneralFailure` 等）。`CreateContinuing` 模式下由后台任务完成时回填。
- `SaveError[] Errors { get; private set; }`：失败原因数组；成功实例为 `null`。每个元素带一条 `Message`。
- `bool Successful { get; }`：纯派生属性，`Result == SaveResult.Success`。判成功用这一个即可。
- `bool IsContinuing { get; }`：若内部 `_continuingTask` 不为空且未 `IsCompleted` 则返回 `true`，表示后台写盘仍在进行。

### 工厂方法（引擎内部，模组不直接调用）

- `static SaveOutput CreateSuccessful(GameData data)`：填 `Data` 与 `Result = Success`。
- `static SaveOutput CreateFailed(IEnumerable<SaveError> errors, SaveResult result)`：把错误序列化为数组并置结果。
- `static SaveOutput CreateContinuing(Task<SaveResultWithMessage> continuingTask)`：保存后台任务，挂 `ContinueWith` 在完成任务后把 `t.Result.SaveResult` 写回 `Result`。

### 动作

- `void PrintStatus()`：开发期调试用。若后台任务已完成则先把其结果（`SaveResult` 与空 `Errors`）回填；成功时打印 `------Successfully saved------`，失败时逐条 `Debug.Print` 每个 [SaveError](../SaveError) 的 `Message` 并触发 `Debug.FailedAssert("SAVE FAILED: ...")`。调用时机：保存返回后你想在日志里看到完整错误清单时。

## 真实示例

保存的入口是 [SaveManager](../SaveManager)。`Game.Current` 是标准的保存根对象；`ISaveDriver` 决定存档落到哪（本地文件、内存等）：

```csharp
MetaData metaData = new MetaData();
metaData.Add("gameVersion", ApplicationVersion.FromParametersDebug().ToString());
ISaveDriver driver = new SaveGameFileInfo(); // 或你的自定义驱动

// 真实获取路径：SaveManager.Save 返回 SaveOutput
SaveOutput output = SaveManager.Save(Game.Current, metaData, "MySave_001", driver);

if (output.Successful)
{
    GameData written = output.Data;      // 本次写盘的存档数据，可直接交给驱动/校验
    Debug.Print("存档写入完成，数据块大小 = " + written.GetDataSizeDebug());
}
else
{
    // Errors 在失败时才有值；逐条上报
    for (int i = 0; i < output.Errors.Length; i++)
    {
        Debug.Print("[保存失败 " + i + "] " + output.Errors[i].Message);
    }
}
```

若在 UI 线程需要同步知道后台写盘结果，可改用 `output.PrintStatus()` 让它 join 任务后再读 `Result`。

## 导航块

- 父级：[存档系统 API 索引](../)
- 同级：[LoadResult](../LoadResult) · [SaveContext](../SaveContext) · [GameData](../GameData)
- 相关：[SaveManager](../SaveManager) · [SaveError](../SaveError) · [ISaveContext](../ISaveContext) · [存档系统总览](../../../architecture/save-system)

## 参见

- 模块索引：[存档系统 API 索引](../)
- 上游枢纽：[SaveManager](../SaveManager)
- 关联类型：[GameData](../GameData) · [SaveError](../SaveError) · [LoadResult](../LoadResult)
