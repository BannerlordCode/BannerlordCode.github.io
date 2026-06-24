<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultVoiceOverModel`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultVoiceOverModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultVoiceOverModel : VoiceOverModel`
**Base:** `VoiceOverModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultVoiceOverModel.cs`

## 概述

`DefaultVoiceOverModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultVoiceOverModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetSoundPathForCharacter
`public override string GetSoundPathForCharacter(CharacterObject character, VoiceObject voiceObject)`

**用途 / Purpose:** 获取 `sound path for character` 的当前值。

### GetAccentClass
`public override string GetAccentClass(CultureObject culture, bool isHighClass)`

**用途 / Purpose:** 获取 `accent class` 的当前值。

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultVoiceOverModel>(new MyDefaultVoiceOverModel());
```

## 参见

- [完整类目录](../catalog)