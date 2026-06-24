<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BeHostileAction`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# BeHostileAction

## 心智模型

先把 `BeHostileAction` 当作这个子系统的入口或数据节点来理解：先看属性代表什么状态，再看方法允许你做什么。

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/BeHostileAction.cs`

BeHostileAction 是一组静态方法，用于在战役中以特定原因触发"BeHostile"。modder通过调用其 `Apply*` 方法改变游戏状态（每种原因一个重载）。

## 方法

### ApplyHostileAction

```csharp
public static void ApplyHostileAction(PartyBase attackerParty, PartyBase defenderParty, float value)
```

**用途 / Purpose:** hostile action。

### ApplyMinorCoercionHostileAction

```csharp
public static void ApplyMinorCoercionHostileAction(PartyBase attackerParty, PartyBase defenderParty)
```

**用途 / Purpose:** minor coercion hostile action。

### ApplyMajorCoercionHostileAction

```csharp
public static void ApplyMajorCoercionHostileAction(PartyBase attackerParty, PartyBase defenderParty)
```

**用途 / Purpose:** major coercion hostile action。

### ApplyEncounterHostileAction

```csharp
public static void ApplyEncounterHostileAction(PartyBase attackerParty, PartyBase defenderParty)
```

**用途 / Purpose:** encounter hostile action。

## 使用示例

```csharp
// 在 mod 中触发一次该动作
BeHostileAction.ApplyHostileAction(attackerParty, defenderParty, 100);
```

## 参见

- [完整类目录](../catalog)
- [战役系统目录](../catalog-campaign)