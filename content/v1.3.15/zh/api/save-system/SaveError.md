---
title: "SaveError"
description: "保存/加载失败时由系统内部构造的轻量错误记录，只携带一句可读的错误信息。"
---

# SaveError

> **一句话职责：** SaveError 是存档管线在失败时抛出的“结果附言”，它只装了一句话——告诉你这次保存或加载为什么没成功。

**命名空间：** `TaleWorlds.SaveSystem.Save`
**模块：** SaveSystem
**类型：** `public class SaveError`
**源文件路径：** `bannerlord-1.3.15/TaleWorlds.SaveSystem/Save/SaveError.cs`

## 概述
存档不是永远成功的：对象图里可能引用了没有定义的可保存类型，序列化委托可能抛异常，驱动写盘可能失败。`SaveError` 就是用来承载这类失败的极简记录。它只有一个 `Message` 属性，由 `internal` 构造函数赋值，框架在捕获到异常时（例如 `LegacySaveContext.Save` 的 `catch` 块）把 `ex.Message` 包进去，再经由 `SaveOutput` / `LoadResult` 暴露给调用方。它不包含堆栈、不包含错误码，只是一个给人看的诊断字符串，目的是让 UI 能弹出“保存失败：xxx”而不是整段崩溃。

## 心智模型
把它想成“急诊室的病情纸条”。保存或加载过程中一旦出错，系统不会把异常直接甩给调用者导致卡死，而是拦下来、写一句话到 `SaveError`，然后把这次操作标记为失败。它诞生在 `catch` 里，活在返回结果对象（`SaveOutput.ErrorMessage` / `LoadResult` 的错误信息）里，是流程的**终点信号**而非过程数据。和 `SaveStatistics` 不同，它不是给你做性能调优的，而是单纯告诉你“挂了，原因在此”。因为构造函数是 `internal`，modder 永远只能**读** `Message`，不能自己 `new` 一个 `SaveError` 塞进流程。

## 何时用 / 何时不要用
- **不要用：** 不要试图 `new SaveError(...)` 或把它当作业务异常去 `throw`；它只是结果容器。
- **正确做法：** 调用 `SaveManager.Save` / `SaveManager.Load` 后检查返回对象的 `Success`，为假时读取错误信息（字符串形式）展示给用户或写日志。

## 依赖图
- 上游：[SaveManager](../SaveManager)、[LegacySaveContext](../LegacySaveContext)
- 下游：[SaveOutput](../SaveOutput) 与 [LoadResult](../LoadResult) 的错误信息字段
- 相关类型/阶段：[LoadError](../LoadError)、[SaveStatistics](../SaveStatistics)

## 风险段
- **只有消息、没有细节：** `SaveError` 不保存异常类型或堆栈，调试深层序列化问题时还要结合 `Debug.Print` / 日志，不要指望它能定位根因。
- **internal 构造：** 构造函数不可见，任何想手动构造以“伪造失败”的做法都无法编译，也违背框架语义。
- **与 LoadError 区分：** 加载侧有独立的 `LoadError` 类型；不要把两者混用，保存失败用的是这里这套。

## 成员说明
- `string Message`：错误的可读描述，构造时从捕获的异常 `ex.Message` 而来，对外只读。modder 拿到后直接展示或记录即可。

## 示例
```csharp
SaveOutput output = SaveManager.Save(Game.Current, new MetaData(), "mySlot", new AsyncFileSaveDriver());
if (!output.Success)
{
    string message = output.ErrorMessage;
    Debug.Print("Save failed: " + message);
}
LoadResult result = SaveManager.Load("mySlot", new AsyncFileSaveDriver());
```

## 导航
- ↑ 父级：[save-system 索引](../)
- ↔ 兄弟：[SaveOutput](../SaveOutput)、[LoadResult](../LoadResult)、[LoadError](../LoadError)
- 架构：[存档系统架构](../../../architecture/save-system)
