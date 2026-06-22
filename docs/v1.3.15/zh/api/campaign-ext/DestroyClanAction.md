<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DestroyClanAction`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DestroyClanAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `TaleWorlds.CampaignSystem/Actions/DestroyClanAction.cs`

DestroyClanAction 是一组静态方法，用于在战役中以特定原因触发"DestroyClan"。modder通过调用其 `Apply*` 方法改变游戏状态（每种原因一个重载）。

## 方法

### Apply

```csharp
public static void Apply(Clan destroyedClan)
```

**用途 / Purpose:** 。

### ApplyByFailedRebellion

```csharp
public static void ApplyByFailedRebellion(Clan failedRebellionClan)
```

**用途 / Purpose:** failed rebellion。

### ApplyByClanLeaderDeath

```csharp
public static void ApplyByClanLeaderDeath(Clan destroyedClan)
```

**用途 / Purpose:** clan leader death。

## 使用示例

```csharp
// 在 mod 中触发一次该动作
DestroyClanAction.Apply(destroyedClan);
```

## 参见

- [完整类目录](../catalog)
- [战役系统目录](../catalog-campaign)