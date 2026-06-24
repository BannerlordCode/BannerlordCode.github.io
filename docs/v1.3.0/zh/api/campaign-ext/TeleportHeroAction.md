<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TeleportHeroAction`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# TeleportHeroAction

## 心智模型

先把 `TeleportHeroAction` 当作这个子系统的入口或数据节点来理解：先看属性代表什么状态，再看方法允许你做什么。

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `TaleWorlds.CampaignSystem/Actions/TeleportHeroAction.cs`

TeleportHeroAction 是一组静态方法，用于在战役中以特定原因触发"TeleportHero"。modder通过调用其 `Apply*` 方法改变游戏状态（每种原因一个重载）。

## 方法

### ApplyImmediateTeleportToSettlement

```csharp
public static void ApplyImmediateTeleportToSettlement(Hero heroToBeMoved, Settlement targetSettlement)
```

**用途 / Purpose:** immediate teleport to settlement。

### ApplyImmediateTeleportToParty

```csharp
public static void ApplyImmediateTeleportToParty(Hero heroToBeMoved, MobileParty party)
```

**用途 / Purpose:** immediate teleport to party。

### ApplyImmediateTeleportToPartyAsPartyLeader

```csharp
public static void ApplyImmediateTeleportToPartyAsPartyLeader(Hero heroToBeMoved, MobileParty party)
```

**用途 / Purpose:** immediate teleport to party as party leader。

### ApplyDelayedTeleportToSettlement

```csharp
public static void ApplyDelayedTeleportToSettlement(Hero heroToBeMoved, Settlement targetSettlement)
```

**用途 / Purpose:** delayed teleport to settlement。

### ApplyDelayedTeleportToParty

```csharp
public static void ApplyDelayedTeleportToParty(Hero heroToBeMoved, MobileParty party)
```

**用途 / Purpose:** delayed teleport to party。

### ApplyDelayedTeleportToSettlementAsGovernor

```csharp
public static void ApplyDelayedTeleportToSettlementAsGovernor(Hero heroToBeMoved, Settlement targetSettlement)
```

**用途 / Purpose:** delayed teleport to settlement as governor。

### ApplyDelayedTeleportToPartyAsPartyLeader

```csharp
public static void ApplyDelayedTeleportToPartyAsPartyLeader(Hero heroToBeMoved, MobileParty party)
```

**用途 / Purpose:** delayed teleport to party as party leader。

## 使用示例

```csharp
// 在 mod 中触发一次该动作
TeleportHeroAction.ApplyImmediateTeleportToSettlement(heroToBeMoved, targetSettlement);
```

## 参见

- [完整类目录](../catalog)
- [战役系统目录](../catalog-campaign)