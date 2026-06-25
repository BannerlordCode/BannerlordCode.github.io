---
title: "GauntletInitialScreen"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GauntletInitialScreen`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# GauntletInitialScreen

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GauntletInitialScreen : MBInitialScreenBase, IChatLogHandlerScreen`
**Base:** `MBInitialScreenBase`
**File:** `Bannerlord.Source/Modules.Native/TaleWorlds.MountAndBlade.GauntletUI/TaleWorlds.MountAndBlade.GauntletUI/GauntletInitialScreen.cs`

## 概述

`GauntletInitialScreen` 位于 `TaleWorlds.MountAndBlade.GauntletUI`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.GauntletUI` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### TryUpdateChatLogLayerParameters
`public void TryUpdateChatLogLayerParameters(ref bool isTeamChatAvailable, ref bool inputEnabled, ref bool isToggleChatHintAvailable, ref bool isMouseVisible, ref InputContext inputContext)`

**用途 / Purpose:** 尝试获取 `update chat log layer parameters`，通常以 out 参数返回结果。

## 使用示例

```csharp
var value = new GauntletInitialScreen();
value.TryUpdateChatLogLayerParameters(isTeamChatAvailable, inputEnabled, isToggleChatHintAvailable, isMouseVisible, inputContext);
```

## 参见

- [完整类目录](../catalog)