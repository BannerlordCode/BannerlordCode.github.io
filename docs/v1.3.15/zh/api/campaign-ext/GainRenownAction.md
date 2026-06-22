<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GainRenownAction`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GainRenownAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `TaleWorlds.CampaignSystem/Actions/GainRenownAction.cs`

GainRenownAction 是一组静态方法，用于在战役中以特定原因触发"GainRenown"。modder通过调用其 `Apply*` 方法改变游戏状态（每种原因一个重载）。

## 方法

### Apply

```csharp
public static void Apply(Hero hero, float renownValue, bool doNotNotify = false)
```

**用途 / Purpose:** 。

## 使用示例

```csharp
// 在 mod 中触发一次该动作
GainRenownAction.Apply(hero, 100, false);
```

## 参见

- [完整类目录](../catalog)
- [战役系统目录](../catalog-campaign)