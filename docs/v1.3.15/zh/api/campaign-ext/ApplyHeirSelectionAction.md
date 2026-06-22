<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ApplyHeirSelectionAction`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**用途 / Purpose:** death。

### ApplyByRetirement

```csharp
public static void ApplyByRetirement(Hero heir)
```

**用途 / Purpose:** retirement。

## 使用示例

```csharp
// 在 mod 中触发一次该动作
ApplyHeirSelectionAction.ApplyByDeath(heir);
```

## 参见

- [完整类目录](../catalog)
- [战役系统目录](../catalog-campaign)