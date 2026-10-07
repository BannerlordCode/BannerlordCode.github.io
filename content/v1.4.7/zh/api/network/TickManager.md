---
title: "TickManager"
description: "按固定频率重复调用委托的节拍器。"
---
# TickManager

**命名空间：** `TaleWorlds.Network`
**模块：** `TaleWorlds.Network`
**类型：** `class`
**基类：** `object`
**源文件：** `TaleWorlds.Network/TickManager.cs`（声明见第 8 行）

## 概述

TickManager 是一个轻量节拍器：构造时给定每秒 tick 次数与一个委托，之后由外部驱动（通常是游戏主循环）反复调用 Tick()，它会按设定频率回调委托。它本身不启动线程，也不自己计时，只负责「该不该现在触发」的判断。

## 心智模型

把它想成「一个不自己走路的钟摆」：你每秒推它 N 次（tickRate），它每次被推时检查「离上次响够不够一格」，够了就响一下（调用 tickMethod）。它不关心谁在推、什么时候停，只维护「上次响的时间」和「该响的频率」。

## 怎么用

### 怎么拿到

源树路径：`bannerlord-1.4.7/TaleWorlds.Network/TickManager.cs`
入口：构造函数 `TickManager(int tickRate, TickManager.TickDelegate tickMethod)`（TickManager.cs:11）。直接 new，把要周期执行的逻辑作为委托传入。

### 典型用法

```csharp
var tm = new TickManager(30, () => Console.WriteLine("tick"));
// 在主循环里每帧调用
while (running)
{
    tm.Tick();
    await Task.Delay(16);
}
```

### 坑

- TickManager 不自己起线程，必须由外部循环驱动，否则永远不会触发。
- tickRate 是「每秒次数」，不是「每帧次数」；帧率高于 tickRate 时靠内部计时去抖。
- 委托抛出的异常会冒泡到 Tick() 调用方，需自行捕获。
- 没有 Stop/Pause 方法，停止只需不再调用 Tick()。

## 关键成员

| 成员 | 用途 |
| --- | --- |
| `TickManager(int tickRate, TickManager.TickDelegate tickMethod)` | 构造函数，设定频率与回调（TickManager.cs:11） |
| `Tick()` | 外部驱动入口，按频率决定是否回调（TickManager.cs:23） |
| `TickDelegate` | 回调委托签名（TickManager.cs:65） |

## 真实示例

```csharp
var tm = new TickManager(30, () => Console.WriteLine("tick"));
while (running)
{
    tm.Tick();
    await Task.Delay(16);
}
```

## 参见

- [RESTClient](../RESTClient)
- [../../core-extra/Game](../../core-extra/Game)

## 导航

- ↑ [版本首页](../../../)
- ↑ [API 参考](../../)
- ↔ [架构总览](../../../architecture/)
