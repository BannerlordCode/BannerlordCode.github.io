---
title: "ApplyHeirSelectionAction"
description: "ApplyHeirSelectionAction 的自动生成战役动作参考。"
---
# ApplyHeirSelectionAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `TaleWorlds.CampaignSystem/Actions/ApplyHeirSelectionAction.cs`

ApplyHeirSelectionAction 是一组静态方法，用于在战役中以特定原因触发"ApplyHeirSelection"。modder通过调用其 `Apply*` 方法改变游戏状态（每种原因一个重载）。

## 方法

### ApplyByDeath

```csharp
public static void ApplyByDeath(Hero heir)
```

**用途 / Purpose:** 将 by death 的效果应用到当前对象。

### ApplyByRetirement

```csharp
public static void ApplyByRetirement(Hero heir)
```

**用途 / Purpose:** 将 by retirement 的效果应用到当前对象。

## 使用示例

```csharp
// 在 mod 中触发一次该动作
ApplyHeirSelectionAction.ApplyByDeath(heir);
```

## 怎么用

### 怎么拿到它

**源文件：** `bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/ApplyHeirSelectionAction.cs`（全文 92 行）。
**调用点（仅两处，都在 SandBox 模块）：** `Modules.SandBox/SandBox/SandBox.CampaignBehaviors/HeirSelectionCampaignBehavior.cs:137` 调 `ApplyByDeath`；`Modules.SandBox/SandBox/SandBox.CampaignBehaviors/RetirementCampaignBehavior.cs:51` 调 `ApplyByRetirement`。

`public static class ApplyHeirSelectionAction`（`ApplyHeirSelectionAction.cs:12`）——**静态类，没有构造器，也没有字段。**

**公开面只有两个方法，它们都是一行转发：**

| 成员 | 转发到 | 行号 |
| --- | --- | --- |
| `ApplyByDeath(Hero heir)` | `ApplyInternal(heir)` | `:72` / `:74` |
| `ApplyByRetirement(Hero heir)` | `ApplyInternal(heir, isRetirement: true)` | `:77` / `:79` |

**而 `ApplyInternal` 是 `private static void ApplyInternal(Hero heir, bool isRetirement = false)`（`:14`）——那 57 行（`:14`-`:70`）全在这里。** **两个公开方法的唯一差别就是那个布尔。**

### 典型用法

**这个 Action 不可逆，而且它干的比「换继承人」多得多。** `:14`-`:70` 里有 **12 个不同的 Action 被链式调用**，其中几个会永久改变玩家身份：

1. 商队分支（`:16`-`:25`）：先按「城镇/城堡且不在交战」找最近定居点（`:18`），**找不到就退到「村庄或非要塞」（`:21`）**，然后 `DestroyPartyAction.Apply`（`:23`）+ `TeleportHeroAction.ApplyImmediateTeleportToSettlement`（`:24`）。
2. `TransferCaravanOwnerships(heir)`（`:26`）→ `ChangeClanLeaderAction.ApplyWithSelectedNewLeader(Clan.PlayerClan, heir)`（`:27`）——**注意氏族被写死成 `Clan.PlayerClan`**，不是 `heir.Clan`。
3. **退休分支**（`:28`-`:39`）：`DisableHeroAction.Apply(Hero.MainHero)`（`:30`）→ 写百科文本（`:38`）。**非退休分支**（`:40`-`:43`）：`KillCharacterAction.ApplyByDeathMarkForced(Hero.MainHero, showNotification: true)`（`:42`）——**玩家英雄是被真的杀掉的。**

**而最后一行 `:69` 是 `Campaign.Current.TimeControlMode = CampaignTimeControlMode.Stop;`** —— **这个 Action 结束时会强制停表。** 计划系统不会自动恢复，你得自己写回去。

两个 `for` 循环都是**倒序**（`:49` 的 `Count - 1; num >= 0`、`:55` 的 `num2`），因为循环体里 `ChangeOwnerOfWorkshopAction.ApplyByDeath`（`:51`）与 `MakeHeroFugitiveAction.Apply`（`:60`）都会改集合。

想安全地「先模拟再执行」，只有一条路：**只读地看它会做什么，不要调它。**

```csharp
public static void PreviewHeirSelection(Hero heir)
{
    Debug.Print("heir=" + heir.Name + " clan=" + heir.Clan.Name, 0);
    Debug.Print("will retarget Clan.PlayerClan (hardcoded at ApplyHeirSelectionAction.cs:27)", 0);
    MobileParty caravan = heir.PartyBelongedTo;
    if (caravan != null && caravan.IsCaravan)
    {
        Settlement target = SettlementHelper.FindNearestSettlementToMobileParty(
            caravan, MobileParty.NavigationType.All,
            (Settlement s) => (s.IsTown || s.IsCastle) && !FactionManager.IsAtWarAgainstFaction(s.MapFaction, heir.MapFaction));
        Debug.Print("caravan branch fires, nearest settlement = " + (target != null ? target.StringId : "<null> -> falls back at :21>"), 0);
    }
    Debug.Print("workshops to transfer = " + Hero.MainHero.OwnedWorkshops.Count, 0);
    Debug.Print("note: apply will stop time control (ApplyHeirSelectionAction.cs:69)", 0);
}
```

**上例第一行那句 `Clan.PlayerClan` 是重点**：如果继承人和玩家不在同一个氏族，这个 Action **仍然会把玩家氏族的族长换掉**，而 `heir` 所在的氏族不受影响。**这是它最容易产生「结果不是我想要的」的地方。**

### 最容易踩的坑

- **`ApplyByDeath` 会杀掉玩家英雄。** `:42` 调的是 `KillCharacterAction.ApplyByDeathMarkForced(Hero.MainHero, showNotification: true)`，不是「退位」。**而 `ApplyByRetirement` 走 `:30` 的 `DisableHeroAction`，是禁用而非死亡——两条分支对玩家英雄的最终状态不同，不能互相替代。**

- **`ApplyHeirSelectionAction` 是 `public static class` 但不可回滚。** 它链式触发 12 个 Action（`:23`-`:68`），其中 `ChangeClanLeaderAction`、`ChangePlayerCharacterAction`、`DestroyPartyAction` 都没有撤销路径。**调一次就是一次终局，存档会被永久改写。**

## 参见

- [本区域目录](../)
- [战役系统](../../campaign/)