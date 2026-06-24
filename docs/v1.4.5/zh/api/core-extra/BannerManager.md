<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BannerManager`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# BannerManager

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class BannerManager`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.Core/TaleWorlds.Core/BannerManager.cs`

## 概述

`BannerManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `BannerManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Instance` | `public static BannerManager Instance { get; }` |
| `BaseBackgroundId` | `public int BaseBackgroundId { get; }` |

## 主要方法

### Initialize
`public static void Initialize()`

**用途 / Purpose:** 初始化 `initialize` 的状态、资源或绑定。

### ResetAndLoad
`public static void ResetAndLoad()`

**用途 / Purpose:** 将 `and load` 重置为初始状态。

### GetColor
`public static uint GetColor(int id)`

**用途 / Purpose:** 获取 `color` 的当前值。

### GetColorId
`public static int GetColorId(uint color)`

**用途 / Purpose:** 获取 `color id` 的当前值。

### GetRandomColorId
`public int GetRandomColorId(MBFastRandom random)`

**用途 / Purpose:** 获取 `random color id` 的当前值。

### GetIconDataFromIconId
`public BannerIconData GetIconDataFromIconId(int id)`

**用途 / Purpose:** 获取 `icon data from icon id` 的当前值。

### GetRandomBackgroundId
`public int GetRandomBackgroundId(MBFastRandom random)`

**用途 / Purpose:** 获取 `random background id` 的当前值。

### GetRandomBannerIconId
`public int GetRandomBannerIconId(MBFastRandom random)`

**用途 / Purpose:** 获取 `random banner icon id` 的当前值。

### GetBackgroundMeshName
`public string GetBackgroundMeshName(int id)`

**用途 / Purpose:** 获取 `background mesh name` 的当前值。

### GetIconSourceTextureName
`public string GetIconSourceTextureName(int id)`

**用途 / Purpose:** 获取 `icon source texture name` 的当前值。

### SetBaseBackgroundId
`public void SetBaseBackgroundId(int id)`

**用途 / Purpose:** 设置 `base background id` 的值或状态。

### SetCultureColors
`public void SetCultureColors(BasicCultureObject culture, List<BannerColor> color)`

**用途 / Purpose:** 设置 `culture colors` 的值或状态。

### LoadBannerIcons
`public void LoadBannerIcons()`

**用途 / Purpose:** 加载 `banner icons` 数据。

### LoadBannerIcons
`public void LoadBannerIcons(string xmlPath)`

**用途 / Purpose:** 加载 `banner icons` 数据。

## 使用示例

```csharp
var manager = BannerManager.Current;
```

## 参见

- [完整类目录](../catalog)