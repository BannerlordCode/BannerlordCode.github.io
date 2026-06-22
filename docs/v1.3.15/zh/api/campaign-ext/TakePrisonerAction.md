<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TakePrisonerAction`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TakePrisonerAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `TaleWorlds.CampaignSystem/Actions/TakePrisonerAction.cs`

TakePrisonerAction 是一组静态方法，用于在战役中以特定原因触发"TakePrisoner"。modder通过调用其 `Apply*` 方法改变游戏状态（每种原因一个重载）。

## 方法

### Apply

```csharp
public static void Apply(PartyBase capturerParty, Hero prisonerCharacter)
```

**用途 / Purpose:** 。

### ApplyByTakenFromPartyScreen

```csharp
public static void ApplyByTakenFromPartyScreen(FlattenedTroopRoster roster)
```

**用途 / Purpose:** taken from party screen。

## 使用示例

```csharp
// 在 mod 中触发一次该动作
TakePrisonerAction.Apply(capturerParty, prisonerCharacter);
```

## 参见

- [完整类目录](../catalog)
- [战役系统目录](../catalog-campaign)