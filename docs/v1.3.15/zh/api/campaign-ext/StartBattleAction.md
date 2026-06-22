<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `StartBattleAction`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# StartBattleAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `TaleWorlds.CampaignSystem/Actions/StartBattleAction.cs`

StartBattleAction 是一组静态方法，用于在战役中以特定原因触发"StartBattle"。modder通过调用其 `Apply*` 方法改变游戏状态（每种原因一个重载）。

## 方法

### Apply

```csharp
public static void Apply(PartyBase attackerParty, PartyBase defenderParty)
```

**用途 / Purpose:** 。

### ApplyStartBattle

```csharp
public static void ApplyStartBattle(MobileParty attackerParty, MobileParty defenderParty)
```

**用途 / Purpose:** start battle。

### ApplyStartRaid

```csharp
public static void ApplyStartRaid(MobileParty attackerParty, Settlement settlement)
```

**用途 / Purpose:** start raid。

### ApplyStartSallyOut

```csharp
public static void ApplyStartSallyOut(Settlement settlement, MobileParty defenderParty)
```

**用途 / Purpose:** start sally out。

### ApplyStartAssaultAgainstWalls

```csharp
public static void ApplyStartAssaultAgainstWalls(MobileParty attackerParty, Settlement settlement)
```

**用途 / Purpose:** start assault against walls。

## 使用示例

```csharp
// 在 mod 中触发一次该动作
StartBattleAction.Apply(attackerParty, defenderParty);
```

## 参见

- [完整类目录](../catalog)
- [战役系统目录](../catalog-campaign)