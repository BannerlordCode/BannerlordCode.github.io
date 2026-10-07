---
title: "DestroyShipAction"
description: "把一艘船从所有者身上解绑并广播 OnShipDestroyed 事件的静态战役动作；Apply 与 ApplyByDiscard 两个入口只影响事件携带的原因枚举。"
---

# DestroyShipAction

**命名空间：** `TaleWorlds.CampaignSystem.Actions`  
**模块：** `TaleWorlds.CampaignSystem`  
**类型：** `public static class`  
**源码：** `TaleWorlds.CampaignSystem/Actions/DestroyShipAction.cs`

## 概述

`DestroyShipAction` 是海军子系统中"失去一艘船"的引擎侧入口。它接收一个 `Ship` 对象，把这艘船从当前所有者身上解绑，然后广播 `OnShipDestroyed` 事件。动作本身不销毁 `Ship` 对象、不扣血、不判定战斗结果——它只做所有权断开关联和事件通知两件事。两个公开方法 `Apply` 与 `ApplyByDiscard` 的区别仅在于广播时携带的 `ShipDestroyDetail` 枚举值不同：前者用于常规损失，后者用于"丢弃"语义（例如商队弃船）。

## 心智模型

把船的所有权想成一条单向引用：`Ship.Owner` 指向一个 `PartyBase`（通常是 `MobileParty` 的 `Party`）。`DestroyShipAction` 做的事情就是在这条引用上"剪断"，顺序是固定的：

1. 先缓存旧所有者 `owner = ship.Owner`（`DestroyShipAction.cs:16`）。
2. 让旧所有者的 `MobileParty` 刷新海军视觉（`SetNavalVisualAsDirty`，`DestroyShipAction.cs:17`）——因为船队外观马上要变。
3. 把 `ship.Owner` 置空（`DestroyShipAction.cs:18`）。`Ship.Owner` 的 setter 会回调旧所有者的 `RemoveShipInternal`，把这艘船从船队列表里摘掉。
4. 广播 `CampaignEventDispatcher.Instance.OnShipDestroyed(owner, ship, detail)`（`DestroyShipAction.cs:19`）。

关键认知：**事件参数里的 `owner` 是"失去船的那一方"，不是 `null`**。mod 在 `OnShipDestroyed` 里拿到的是解绑前的所有者引用，可以安全地用它做日志、补偿或 UI 提示。`Ship` 对象本身在动作完成后仍然存在，只是没有了所有者——它不会自动从世界上消失。

`ApplyByDiscard` 与 `Apply` 走的是同一条 `ApplyInternal` 路径，唯一差别是第 4 步广播时带的 detail 是 `ApplyByDiscard` 而不是 `ApplyDefault`。也就是说，这个枚举存在的意义是让监听者**区分沉船的原因**，而不是改变解绑行为本身。

## 怎么用

### 怎么拿到

- 源树路径：`TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/DestroyShipAction.cs`（共 31 行）
- 入口：`DestroyShipAction.cs:22` 的 `public static void Apply(Ship ship)`，以及 `DestroyShipAction.cs:27` 的 `public static void ApplyByDiscard(Ship ship)`
- 船从哪来：`MobileParty.Ships` 给出 party 当前持有的船队列表（`MobileParty.cs:330`）；也可以从任意 `Ship.Owner` 反查所有者

典型用法：

```csharp
// 让玩家的整个船队失去所有权（对应 TakePrisonerAction.cs:30-33 的场景）
foreach (Ship ship in MobileParty.MainParty.Ships)
{
    DestroyShipAction.Apply(ship);
}
```

坑：

- **事件里的 `owner` 是旧所有者。** 不要在 `OnShipDestroyed` 里假设 `owner` 是 `null` 或当前所有者。
- **`Ship` 对象不会被销毁。** 动作结束后船还在，只是 `Owner` 为 `null`。要彻底移除需要额外的清理逻辑。
- **`ApplyByDiscard` 不改变解绑行为。** 它只是给事件监听者一个"这是丢弃"的信号。如果你不关心原因，用 `Apply` 即可。
- **不要在 `OnShipDestroyed` 回调里再调用 `DestroyShipAction`。** 会造成递归解绑。

## 关键成员

- `Apply(Ship ship)` — `DestroyShipAction.cs:22` — 公开入口，以 `ShipDestroyDetail.ApplyDefault` 原因解绑船并广播事件。
- `ApplyByDiscard(Ship ship)` — `DestroyShipAction.cs:27` — 公开入口，行为与 `Apply` 完全相同，但广播时携带 `ShipDestroyDetail.ApplyByDiscard`，供监听者区分"丢弃"语义。
- `ApplyInternal(Ship ship, ShipDestroyDetail detail)` — `DestroyShipAction.cs:14` — 私有实现：缓存旧 owner → 刷新海军视觉 → `Owner` 置空 → 广播 `OnShipDestroyed`。两个公开方法都委托给它。
- `ShipDestroyDetail` 枚举 — `DestroyShipAction.cs:8` — 只有 `ApplyDefault`（`DestroyShipAction.cs:10`）和 `ApplyByDiscard`（`DestroyShipAction.cs:11`）两个值，只作为事件参数传递，不影响解绑逻辑。

## 真实示例

玩家在海上的 party 被俘时，引擎会清空其船队（`TakePrisonerAction.cs:30-33`）：

```csharp
for (int num = MobileParty.MainParty.Ships.Count - 1; num >= 0; num--)
{
    DestroyShipAction.Apply(MobileParty.MainParty.Ships[num]);
}
```

商队场景下用 `ApplyByDiscard` 表示"丢弃"（`CaravansCampaignBehavior.cs:741`）：

```csharp
DestroyShipAction.ApplyByDiscard(item);
```

mod 侧监听船损失事件（签名见 `CampaignEventReceiver.cs:1009`）：

```csharp
public override void OnShipDestroyed(PartyBase owner, Ship ship, DestroyShipAction.ShipDestroyDetail detail)
{
    if (owner == PartyBase.MainParty)
    {
        InformationManager.AddMessage(new InformationMessage("Lost ship: " + ship.Name));
    }
}
```

## 参见

- [TakePrisonerAction](../TakePrisonerAction) — 玩家海上被俘时清空船队的调用方（`TakePrisonerAction.cs:32`）。
- [ChangeShipOwnerAction](../ChangeShipOwnerAction) — 更换船所有者时同样调用 `SetNavalVisualAsDirty` 刷新视觉。
- [Ship](../../campaign/Ship) — 被解绑的对象，`Owner` 属性声明在 `Ship.cs:103`。
- [MobileParty](../../campaign/MobileParty) — `Ships` 列表的来源（`MobileParty.cs:330`）。
- [战役动作索引](../actions-index)

## 导航

- [战役扩展 API 索引](../)
- [战役 API 根索引](../../campaign/)
