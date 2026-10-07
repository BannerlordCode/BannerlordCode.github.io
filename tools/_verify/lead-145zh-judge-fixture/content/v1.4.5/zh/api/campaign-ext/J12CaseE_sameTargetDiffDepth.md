---
title: "JudgeFixture"
description: "判分器正向对照夹具：不在站点 content/ 下，只用来证明 lead-145zh-judge.mjs 能给出 PASS。"
---
# JudgeFixture

**命名空间：** `TaleWorlds.CampaignSystem.Actions`
**模块：** `TaleWorlds.CampaignSystem`
**类型：** `public static class`
**源文件：** `TaleWorlds.CampaignSystem/Actions/DestroyShipAction.cs`

## 概述

这是正向对照夹具，用来证明判分器的九条判据在同时满足时输出 PASS，而不是永远输出 FAIL。它描述一个只在夹具里存在的静态动作类，正文体量必须超过 2500 字节才能通过 J8，所以这一段需要写到足够长，把所有判据都覆盖一遍，并保证没有任何一个生成标记字符串出现在文件里，也没有任何以点斜杠开头的链接或直接指向 _index.md 的链接。

## 心智模型

把夹具想成一个「单入口 + 单事件」的最小动作类：它接收一个目标对象，改掉它的归属，然后广播一次事件。心智模型要写满八十字以上才算有效，所以这里把三段推理都写出来：第一，动作类只负责状态转换，不负责判定条件；第二，状态转换之后必须广播，否则订阅方看不到变化；第三，调用方必须先自行确认前置不变量成立，因为动作类内部不做完整空值保护。把这三条记住，就能预判所有同类动作的行为。

## 怎么用

### 怎么拿到

**源文件：** `bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/DestroyShipAction.cs`（全文 31 行）。
**入口：** `public static void Apply(Ship ship)`（`DestroyShipAction.cs:22`）。

### 典型用法

先确认前置条件，再调用，再读事件。

### 坑

`ApplyByDiscard` 走的是同一个 `ApplyInternal`（`DestroyShipAction.cs:14`），只有 detail 不同。

## 关键成员

- `Apply(Ship ship)`（`DestroyShipAction.cs:22`）— 以默认原因销毁船只，内部转调 `ApplyInternal` 并传 `ShipDestroyDetail.ApplyDefault`。
- `ApplyByDiscard(Ship ship)`（`DestroyShipAction.cs:27`）— 以丢弃原因销毁船只，与上面只差一个枚举值。
- `ApplyInternal(Ship ship, ShipDestroyDetail detail)`（`DestroyShipAction.cs:14`）— 私有实现：清空 `ship.Owner` 后广播 `OnShipDestroyed`。

## 真实示例

```csharp
public static void ScuttleMainPartyShip()
{
    Ship ship = MobileParty.MainParty.Ships[0];
    if (ship != null && ship.Owner != null)
    {
        DestroyShipAction.Apply(ship);
    }
}
```

## 参见

- [TakePrisonerAction](../TakePrisonerAction)
- [CampaignEvents](../CampaignEvents)
- [CampaignEvents](../../campaign-ext/CampaignEvents)

## 导航

- [本区域目录](../)
