<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MultiplayerTeamPlayerAvatarButtonWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
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

## 主要属性

| Name | Signature |
|------|-----------|
| `IsDead` | `public bool IsDead { get; set; }` |
| `DeathAlphaFactor` | `public float DeathAlphaFactor { get; set; }` |
| `AvatarImage` | `public ImageIdentifierWidget AvatarImage { get; set; }` |

## 使用示例

```csharp
// MultiplayerTeamPlayerAvatarButtonWidget (Widget) 的典型用法
// 声明/访问一个 MultiplayerTeamPlayerAvatarButtonWidget
var widget = root.GetChild("multiplayerTeamPlayerAvatarButtonWidget");;
```

## 参见

- [完整类目录](../catalog)