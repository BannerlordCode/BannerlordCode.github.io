<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CompassTargetVM`
- [← 本领域 / 返回 viewmodel](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# CompassTargetVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.HUD.Compass
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CompassTargetVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.HUD.Compass/CompassTargetVM.cs`

## 概述

`CompassTargetVM` 位于 `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.Compass`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.Compass` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Banner` | `public BannerImageIdentifierVM Banner { get; set; }` |
| `IsFlag` | `public bool IsFlag { get; set; }` |
| `Distance` | `public int Distance { get; set; }` |
| `Color2` | `public string Color2 { get; set; }` |
| `Color` | `public string Color { get; set; }` |
| `IconType` | `public string IconType { get; set; }` |
| `IconSpriteType` | `public string IconSpriteType { get; set; }` |
| `LetterCode` | `public string LetterCode { get; set; }` |
| `FullPosition` | `public float FullPosition { get; set; }` |
| `Position` | `public float Position { get; set; }` |
| `IsAttacker` | `public bool IsAttacker { get; set; }` |
| `IsEnemy` | `public bool IsEnemy { get; set; }` |

## 主要方法

### RefreshColor
`public void RefreshColor(uint color, uint color2)`

**用途 / Purpose:** 刷新 `color` 的显示或缓存。

### Refresh
`public virtual void Refresh(float circleX, float x, float distance)`

**用途 / Purpose:** 刷新 `refresh` 的显示或缓存。

## 使用示例

```csharp
var value = new CompassTargetVM();
value.RefreshColor(0, 0);
```

## 参见

- [完整类目录](../catalog)