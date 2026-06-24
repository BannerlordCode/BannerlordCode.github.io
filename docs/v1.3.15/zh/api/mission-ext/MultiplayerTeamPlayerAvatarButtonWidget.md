<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MultiplayerTeamPlayerAvatarButtonWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerTeamPlayerAvatarButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerTeamPlayerAvatarButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/MultiplayerTeamPlayerAvatarButtonWidget.cs`

## 概述

`MultiplayerTeamPlayerAvatarButtonWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `MultiplayerTeamPlayerAvatarButtonWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsDead` | `public bool IsDead { get; set; }` |
| `DeathAlphaFactor` | `public float DeathAlphaFactor { get; set; }` |
| `AvatarImage` | `public ImageIdentifierWidget AvatarImage { get; set; }` |

## 使用示例

```csharp
var widget = new MultiplayerTeamPlayerAvatarButtonWidget(context);
```

## 参见

- [完整类目录](../catalog)