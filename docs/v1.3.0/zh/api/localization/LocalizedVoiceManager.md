<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `LocalizedVoiceManager`
- [← 本领域 / 返回 localization](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# LocalizedVoiceManager

**Namespace:** TaleWorlds.Localization
**Module:** TaleWorlds.Localization
**Type:** `public static class LocalizedVoiceManager`
**Base:** 无
**File:** `TaleWorlds.Localization/LocalizedVoiceManager.cs`

## 概述

`LocalizedVoiceManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `LocalizedVoiceManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetLocalizedVoice
`public static VoiceObject GetLocalizedVoice(string id)`

**用途 / Purpose:** 获取 `localized voice` 的当前值。

### GetVoiceLanguageIds
`public static List<string> GetVoiceLanguageIds()`

**用途 / Purpose:** 获取 `voice language ids` 的当前值。

## 使用示例

```csharp
var manager = LocalizedVoiceManager.Current;
```

## 参见

- [完整类目录](../catalog)