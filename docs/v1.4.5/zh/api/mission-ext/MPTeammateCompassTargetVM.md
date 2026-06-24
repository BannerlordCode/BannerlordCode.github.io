<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MPTeammateCompassTargetVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MPTeammateCompassTargetVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.ClassLoadout
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPTeammateCompassTargetVM : CompassTargetVM`
**Base:** `CompassTargetVM`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.ClassLoadout/MPTeammateCompassTargetVM.cs`

## 概述

`MPTeammateCompassTargetVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.ClassLoadout`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.ClassLoadout` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### MPTeammateCompassTargetVM
`public unsafe MPTeammateCompassTargetVM(TargetIconType iconType, uint color, uint color2, Banner banner, bool isAlly)`

**用途 / Purpose:** 处理 `m p teammate compass target v m` 相关逻辑。

### RefreshTargetIconType
`public unsafe void RefreshTargetIconType(TargetIconType targetIconType)`

**用途 / Purpose:** 刷新 `target icon type` 的显示或缓存。

### RefreshTeam
`public void RefreshTeam(Banner banner, bool isAlly)`

**用途 / Purpose:** 刷新 `team` 的显示或缓存。

## 使用示例

```csharp
var value = new MPTeammateCompassTargetVM();
value.MPTeammateCompassTargetVM(iconType, 0, 0, banner, false);
```

## 参见

- [完整类目录](../catalog)