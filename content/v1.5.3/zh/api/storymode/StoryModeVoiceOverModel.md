---
title: "StoryModeVoiceOverModel"
description: "角色语音路径解析模型：为教学村长强制指定 PC 语音，并按玩家性别为兄长挑选匹配的人声文件。"
---
# StoryModeVoiceOverModel

**Namespace:** StoryMode.GameComponents
**Module:** StoryMode
**Type:** `public class StoryModeVoiceOverModel : VoiceOverModel`
**Base:** `VoiceOverModel`（继承自 `MBGameModel<VoiceOverModel>`）
**Source:** `bannerlord-1.5.3/StoryMode/GameComponents/StoryModeVoiceOverModel.cs`

## 概述

对话与场景提示里播哪一段语音，由这个模型把「角色 + 语音条目」解析成一条可播放的相对路径。StoryMode 加了两个特例：教学阶段的村长固定使用第一条语音路径并强制 `$PLATFORM` 替换成 `PC`；玩家的兄长则按 `角色id_玩家性别` 的命名规则在候选路径里做匹配，优先选完全匹配的，其次选只匹配角色 id 的。

## 心智模型

注册方式 `campaignGameStarter.AddModel<VoiceOverModel>(new StoryModeVoiceOverModel())`。唯一被改写的方法 `GetSoundPathForCharacter(CharacterObject character, VoiceObject voiceObject)` 在每次要播语音时被问，返回一个字符串路径（相对 `BasePath`，扩展名 `.ogg` 由本方法补上）。

三条路径：

1. **`voiceObject == null` → 返回 `""`。** 空字符串而不是 null，调用方不需要判空，但也意味着不会播放。
2. **教学村长**：`!TutorialPhase.Instance.IsCompleted && TutorialPhase.Instance.TutorialVillageHeadman.CharacterObject == character`。取 `voiceObject.VoicePaths.First<string>()`（即第一条），打一条 `Debug.Print`，把 `$PLATFORM` 替换成 `"PC"`，再拼 `.ogg`。
3. **兄长**：`StoryModeHeroes.ElderBrother.CharacterObject == character`。构造匹配键 `character.StringId + "_" + (CharacterObject.PlayerCharacter.IsFemale ? "female" : "male")`（源码里是两个字面量常量 `Male` / `Female`）。然后遍历 `voiceObject.VoicePaths`：路径**包含**这个完整键就用它并 `break`；否则如果路径包含 `character.StringId + "_"` 就先记为候选。循环结束后若候选为空，直接返回空字符串；否则同样替换 `$PLATFORM`、拼 `.ogg`。

其余角色一律 `base.BaseModel.GetSoundPathForCharacter(character, voiceObject)`。

**遍历顺序的语义**：完整匹配是「遇到就用」，前缀匹配是「先记着继续找」。所以候选列表里若同时有 `elder_brother_male` 和 `elder_brother_female`，只有与玩家性别相符的那个会被选中；只有一个通用条目时它成为兜底。

**`IsCompleted` 之外还有一层平台判定**：`$PLATFORM` 被写死替换成 `"PC"`，**不考虑当前平台**。在主机/移动版上这仍会指向 PC 语音路径。

**常见误用与坑**

- **无条件解引用 `TutorialPhase.Instance`**，没有判空。任何绕过正常教学流程的 mod 会在此 NRE。
- **`$PLATFORM` 被硬编码成 `PC`。** 这是源码现状，不是通用平台解析。
- **匹配键依赖玩家性别**，不是角色自身性别。同一段语音在不同存档里可能指向不同文件。
- **返回空字符串等于静默。** 没有日志、没有 fallback，语音缺失在游戏里表现为「没声音」而非报错。
- **`Debug.Print` 带一条硬编码颜色值 `17592186044416UL`**，与内容无关，忽略即可。

## 怎么用

### 怎么拿到它

`public class StoryModeVoiceOverModel : VoiceOverModel` 声明在 `bannerlord-1.5.3/StoryMode/GameComponents/StoryModeVoiceOverModel.cs:13`，全文 68 行，两个 override。

注册点：`campaignGameStarter.AddModel<VoiceOverModel>(new StoryModeVoiceOverModel())`（`StoryModeSubModule.cs:107`），只在主线战役生效（`StoryModeSubModule.cs:23`→`:24`）。读用 `Campaign.Current.Models.VoiceOverModel`。

`GetAccentClass(CultureObject culture, bool isHighClass)`（`:57`）是纯透传（`:59`）。全部逻辑在 `GetSoundPathForCharacter(CharacterObject character, VoiceObject voiceObject)`（`:16`），它有**四条出口**：

1. `voiceObject == null` → `return "";`（`:18`→`:20`）
2. 教学未完成且 `TutorialPhase.Instance.TutorialVillageHeadman.CharacterObject == character` → `voiceObject.VoicePaths.First<string>()`（`:24`），把 `$PLATFORM` 替换成 `"PC"`（`:26`），返回 `text + ".ogg"`（`:27`）。**无条件取第一条，不做任何匹配。**
3. `StoryModeHeroes.ElderBrother.CharacterObject != character` → `base.BaseModel.GetSoundPathForCharacter(...)`（`:29`→`:31`）
4. 兄长分支：拼键 `character.StringId + "_" + (CharacterObject.PlayerCharacter.IsFemale ? "female" : "male")`（`:34`，字面量取自 `private const string Male`（`:65`）/ `Female`（`:66`），但源码写的是内联字面量），遍历 `voiceObject.VoicePaths`：路径**包含**完整键就用它并 `break`（`:37`→`:40`）；否则若包含 `character.StringId + "_"` 就先记为候选（`:42`→`:45`）。循环后候选为空则 `return text2;`（即空串，`:47`→`:49`），否则同样替换平台并拼 `.ogg`（`:52`→`:53`）。

两条命中的分支都会先 `Debug.Print("[VOICEOVER]Sound path found: " + BasePath.Name + text, ...)`（`:25`、`:51`）。

### 典型用法

```csharp
// 运行期读
VoiceOverModel vo = Campaign.Current.Models.VoiceOverModel;

// null 语音对象是合法输入，返回空串而不是 null
Debug.Print("null 输入=[" + vo.GetSoundPathForCharacter(Hero.MainHero.CharacterObject, null) + "]");

// 教学村长：取 VoicePaths 的第一条
VoiceObject headmanVo = MBObjectManager.Instance.GetObject<VoiceObject>("tutorial_npc_tacitus");
Debug.Print("村长语音=" + vo.GetSoundPathForCharacter(
    StoryModeManager.Current.MainStoryLine.TutorialPhase.TutorialVillageHeadman.CharacterObject, headmanVo));

// 兄长：按角色 StringId + 性别匹配
VoiceObject brotherVo = MBObjectManager.Instance.GetObject<VoiceObject>("tutorial_npc_brother");
Debug.Print("兄长语音=" + vo.GetSoundPathForCharacter(
    StoryModeHeroes.ElderBrother.CharacterObject, brotherVo));

// 口音透传
Debug.Print("口音类=" + vo.GetAccentClass(StoryModeData.ImperialCulture, true));
```

### 最容易踩的坑

兄长的匹配是 `text4.Contains(text3)`——**子串包含，不是相等**。匹配键是 `角色StringId + "_" + 性别`（`:34`），而候选键是 `角色StringId + "_"`（`:42`）。所以 `tutorial_npc_brother_female` 这种路径会先命中完整键而胜出（`:37`→`:40`）；但如果 mod 加了一条命名巧合的路径（比如 `some_mod_tutorial_npc_brother_female_extra`），它同样 `Contains` 那个完整键，就会被选中，且因为 `break` 掉了，后面的正确条目永远轮不到。**枚举顺序决定结果，不是最佳匹配。**

## 主要成员

- `GetSoundPathForCharacter(CharacterObject character, VoiceObject voiceObject)`
  返回可播放的语音相对路径（含 `.ogg`）。三个分支如上。**由对话与场景提示的播放流程调用**；传 `null` 语音对象是合法输入。
- `GetAccentClass(CultureObject culture, bool isHighClass)`
  按文化与阶层返回口音标识，透传。角色语音选择与口音匹配时询问。
- 私有常量 `Male` / `Female` —— 性别后缀的字面量 `"male"` / `"female"`，仅用于拼接匹配键，不可外部访问。

## 使用示例

```csharp
// 场景：教学村长在主机上也走同一条语音（保持 StoryMode 的硬编码 PC 路径），
// 但对缺失语音的角色打印一次警告，便于定位 mod 造成的语音空缺
public class MyVoiceOverModel : VoiceOverModel
{
    public override string GetSoundPathForCharacter(
        CharacterObject character, VoiceObject voiceObject)
    {
        string path = base.BaseModel.GetSoundPathForCharacter(character, voiceObject);
        if (string.IsNullOrEmpty(path) && voiceObject != null)
        {
            Debug.Print("[VOICEOVER]no path for " + character.StringId
                + " in " + voiceObject.VoicePaths.Count + " candidates");
        }
        return path;
    }
}

protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    base.InitializeGameStarter(game, gameStarterObject);
    var starter = (CampaignGameStarter)gameStarterObject;
    starter.AddModel<VoiceOverModel>(new MyVoiceOverModel());
}
```

## 风险与边界

- **无存档序列化风险**：模型无字段，返回的路径是纯字符串。
- **`TutorialPhase.Instance` 无判空**：这是本层最脆的一处，教学流程被改写时会 NRE。覆写时保留判空是稳妥做法。
- **`$PLATFORM` 硬编码 `PC` 是源码事实**，不是遗漏。跨平台 mod 若依赖它会得到错误的平台路径。
- **依赖 `voiceObject.VoicePaths` 的内容顺序**：教学村长分支取 `.First<string>()`，XML 里 `Voice` 节点的书写顺序决定了播哪一条。调整 XML 顺序即改变结果。
- **与 [StoryModeBannerItemModel](../StoryModeBannerItemModel) 共享一类硬编码脆弱性**：都依赖 `StringId` 字面量做匹配，mod 改名即失效。

## 依赖关系

- [CampaignGameStarter](../../campaign/CampaignGameStarter) — 模型注册入口
- [MBGameModel](../../core-extra/MBGameModel) — `GetAccentClass` 与普通角色的语音解析落点
- [TutorialPhaseCampaignBehavior](../TutorialPhaseCampaignBehavior) — 教学村长（Orthos）的创建与阶段状态来源
- [StoryModeNotableSpawnModel](../StoryModeNotableSpawnModel) — 教学村名望为 0，正是村长被特殊语音处理的原因
- [module-map](../../../architecture/module-map) — StoryMode 模块的组成与依赖关系