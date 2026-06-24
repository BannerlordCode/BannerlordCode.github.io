<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `EnterSettlementAction`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# EnterSettlementAction

## 心智模型

先把 `EnterSettlementAction` 当作这个子系统的入口或数据节点来理解：先看属性代表什么状态，再看方法允许你做什么。

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/EnterSettlementAction.cs`

EnterSettlementAction 是一组静态方法，用于在战役中以特定原因触发"EnterSettlement"。modder通过调用其 `Apply*` 方法改变游戏状态（每种原因一个重载）。

## 方法

### ApplyForParty

```csharp
public static void ApplyForParty(MobileParty mobileParty, Settlement settlement)
```

**用途 / Purpose:** for party。

### ApplyForPartyEntersAlley

```csharp
public static void ApplyForPartyEntersAlley(MobileParty party, Settlement settlement, Alley alley, bool isPlayerInvolved = false)
```

**用途 / Purpose:** for party enters alley。

### ApplyForCharacterOnly

```csharp
public static void ApplyForCharacterOnly(Hero hero, Settlement settlement)
```

**用途 / Purpose:** for character only。

### ApplyForPrisoner

```csharp
public static void ApplyForPrisoner(Hero hero, Settlement settlement)
```

**用途 / Purpose:** for prisoner。

## 使用示例

```csharp
// 在 mod 中触发一次该动作
EnterSettlementAction.ApplyForParty(mobileParty, settlement);
```

## 参见

- [完整类目录](../catalog)
- [战役系统目录](../catalog-campaign)