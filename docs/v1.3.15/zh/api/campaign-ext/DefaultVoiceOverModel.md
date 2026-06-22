<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultVoiceOverModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultVoiceOverModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultVoiceOverModel : VoiceOverModel`
**Base:** `VoiceOverModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultVoiceOverModel.cs`

## 概述

`DefaultVoiceOverModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DefaultVoiceOverModel>(new MyDefaultVoiceOverModel())` 注册，以改变其计算逻辑。

## 主要方法

### GetSoundPathForCharacter
```csharp
public override string GetSoundPathForCharacter(CharacterObject character, VoiceObject voiceObject)
```

### GetAccentClass
```csharp
public override string GetAccentClass(CultureObject culture, bool isHighClass)
```

## 使用示例

```csharp
// DefaultVoiceOverModel (Model) 的典型用法
Game.Current.ReplaceModel<DefaultVoiceOverModel>(new MyDefaultVoiceOverModel());
```

## 参见

- [完整类目录](../catalog)