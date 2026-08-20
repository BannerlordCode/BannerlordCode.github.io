---
title: "LoadError"
description: "读档失败时携带的一条错误信息，由 LoadResult.Errors 暴露给调用方。"
---

# LoadError

> **一句话职责：** 表示一次读档过程中出现的单条错误，封装出错描述文本，供加载结果向上层报告失败原因。

**命名空间：** `TaleWorlds.SaveSystem.Load`
**模块：** SaveSystem
**类型：** `class LoadError`
**源文件路径：** `bannerlord-1.3.15/TaleWorlds.SaveSystem/Load/LoadError.cs`

## 概述
加载存档并不总成功：版本不兼容、数据损坏、定义缺失、回调抛异常都会让读档失败。`LoadError` 就是这些失败理由的载体——一个只带 `Message` 的轻量对象。`SaveManager.Load` 在失败时把它放进 `LoadResult.Errors`，让调用方能拿到人类可读的原因去提示玩家或写日志。它的构造函数是 `internal`，意味着你只读取、不构造。

## 心智模型
把它想成“读档失败通知单”：每次加载流水线某一步踩到坑，就写一张通知单（一条 `Message`），最后把所有通知单装进 `LoadResult` 退给你。它和保存侧的 `SaveError` 是对称的——一个报“存不下”，一个报“读不出”。modder 在读档后检查 `LoadResult.Success`，失败时遍历 `Errors` 取 `Message` 即可，无需也不可能自己 `new LoadError`。

## 何时用 / 何时不要用
在读档结果里*消费* `LoadError`：加载失败时读取 `LoadResult.Errors` 中每条 `Message` 来定位问题或提示用户。不要尝试自己构造 `LoadError`——构造函数是 `internal`，且错误应由加载系统产生。若要主动阻止加载，请在校验阶段（如版本检查）直接返回失败结果，而不是手动造错误对象。

## 依赖图
- 上游：[SaveManager](../SaveManager)、[LoadCallbackInitializator](../LoadCallbackInitializator)
- 下游：[GameData](../GameData)
- 相关类型/阶段：[LoadInitializationCallback](../LoadInitializationCallback)、[SaveError](../SaveError)

## 风险段
- 只读语义：`Message` 只有 `private set`，外部无法修改；试图赋值或无参构造都不可用。
- 多条错误：一次加载可能累积多条 `LoadError`，判断失败时不要只看第一条，应检查整组 `Errors`。
- 与保存错误区分：`LoadError`（加载）和 `SaveError`（保存）是不同命名空间/用途的类型，不要混用。

## 成员说明
- `string Message { get; private set; }`：错误的可读描述。由 `internal` 构造函数 `LoadError(string message)` 在加载流程中赋值，加载失败时在 `LoadResult.Errors` 里被读取。

## 示例
```csharp
ISaveDriver driver = new InMemDriver();
LoadResult result = SaveManager.Load("mySlot", driver);
if (!result.Success)
{
    foreach (LoadError error in result.Errors)
        Debug.Print(error.Message);
}
```

## 导航
- ↑ 父级：[save-system 索引](../)
- ↔ 兄弟：[SaveError](../SaveError)、[SaveManager](../SaveManager)
- 架构：[存档系统架构](../../../architecture/save-system)
