<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MultiplayerLobbyCosmeticAnimationPartWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerLobbyCosmeticAnimationPartWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerLobbyCosmeticAnimationPartWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/MultiplayerLobbyCosmeticAnimationPartWidget.cs`

## 概述

`MultiplayerLobbyCosmeticAnimationPartWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要方法

### InitializeAnimationParameters
```csharp
public void InitializeAnimationParameters()
```

### StartAnimation
```csharp
public void StartAnimation(float alphaChangeDuration, float minAlpha, float maxAlpha)
```

### StopAnimation
```csharp
public void StopAnimation()
```

## 使用示例

```csharp
// MultiplayerLobbyCosmeticAnimationPartWidget (Widget) 的典型用法
// 声明/访问一个 MultiplayerLobbyCosmeticAnimationPartWidget
var widget = root.GetChild("multiplayerLobbyCosmeticAnimationPartWidget");;
```

## 参见

- [完整类目录](../catalog)