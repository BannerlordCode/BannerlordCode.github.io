---
title: "StoryModeHeroes"
description: "主线专属 NPC 的静态门面：主角的家人、手足、两位导师，以及一批教学专用 NPC 都在这里按 Hero 暴露。"
---
# StoryModeHeroes

**Namespace:** StoryMode.StoryModeObjects
**Module:** StoryMode
**Type:** `public class StoryModeHeroes`
**Base:** `System.Object`
**Source:** `bannerlord-1.5.3/StoryMode/StoryModeObjects/StoryModeHeroes.cs`

## 概述

主线剧本需要一批不在普通 NPC 列表里、但必须以 `Hero` 身份存在的角色：主角的母亲和父亲、三个手足（哥哥、弟弟、妹妹）、两位导师 Istiana 与 Arzagos、Tacitus、Radagos、Radagos 的跟班。这些角色由 `HeroCreator.CreateBasicHero` 在战役加载时**运行时造出来**，本类就是它们的注册表。所有成员都是 **static 属性**，内部转发到 [StoryModeManager.Current](../StoryModeManager) 的实例私有字段。

## 心智模型

它的实例由 [StoryModeManager.InitializeStoryModeObjects()](../StoryModeManager) 创建，时机是 `CampaignStoryMode.DoLoadingForGameType` 走到 `InitializeFirstStep` 之后——也就是**战役对象就绪之后**。这是必须的，因为构造函数要做三件事：查 `Campaign.Current.CampaignObjectManager`、从 `Game.Current.ObjectManager` 取 `CharacterObject`、给 `Hero` 绑父母和氏族。

每个角色的 id 都是常量，源码里 11 个 `private const string` 与实际使用的字面量一一对应：

| 静态属性 | StringId | 说明 |
| --- | --- | --- |
| `ElderBrother` | `tutorial_npc_brother` | 哥哥，有完整属性初始化 |
| `LittleBrother` | `storymode_little_brother` | 弟弟 |
| `LittleSister` | `storymode_little_sister` | 妹妹 |
| `Tacitus` | `tutorial_npc_tacitus` | 教学 NPC |
| `Radagos` | `tutorial_npc_radagos` | 教学 NPC |
| `ImperialMentor` | `storymode_imperial_mentor_istiana` | 帝国导师 Istiana |
| `AntiImperialMentor` | `storymode_imperial_mentor_arzagos` | 反帝国导师 Arzagos |
| `RadagosHenchman` | `radagos_henchman` | 常量名写作 `GalterStringId` |
| `MainHeroMother` | `main_hero_mother` | 主角母亲 |
| `MainHeroFather` | `main_hero_father` | 主角父亲 |

**注意 `RegisterAll()` 里的分支不对称**：父母走 `CreateBasicHero(..., false)`（`isNoSideCharacter = false`）并显式设 `Clan = player_faction`、随机生死日期；哥哥额外做了 `SetName`、`Mother`/`Father` 绑定和 `HeroDeveloper.ResetCharacterStats()`；弟弟妹妹做了名字和父母绑定但**没有** `Clan` 赋值、也**没有** `ResetCharacterStats()`；Tacitus / Radagos / 两位导师 / Radagos 跟班则完全裸建，不设名不绑亲。

**坑**：

1. **静态属性会 NRE 而不返回 null**：`StoryModeManager.Current` 为 null 时直接抛异常。非主线战役里访问 `StoryModeHeroes.ImperialMentor` 必崩。
2. **加载未完成时同样 NRE**：`StoryModeManager.Current.StoryModeHeroes` 在 `InitializeFirstStep` 之前是 null。
3. **`CreateBasicHero` 的第三个参数是 `isNoSideCharacter`**：父母是 `false`（会进世界），其余全是 `true`。弟弟妹妹没被设 `Clan`，靠 `isNoSideCharacter` 兜住。
4. **`MainHeroMother` / `MainHeroFather` 名字不会变**：走的是固定 id，不走 `GameTexts.FindText`；其余有名字的角色按 `@object.Culture.StringId`（母亲的 `CharacterObject` 的文化）找本地化名。**母亲没找到 `CharacterObject` 就整个分支跳过**，`MainHeroMother` 保持 null。
5. **`GalterStringId` 命名遗留**：常量叫 Galter，用途却是 Radagos 的跟班。别被名字误导。

## 主要成员

- `static Hero MainHeroMother { get; }`：主角母亲。`main_hero_mother`，随机生死日期。
- `static Hero MainHeroFather { get; }`：主角父亲。`main_hero_father`，随机生死日期。
- `static Hero ElderBrother { get; }`：哥哥。`tutorial_npc_brother`，有名字、父母、属性重置。
- `static Hero LittleBrother { get; }`：弟弟。`storymode_little_brother`。
- `static Hero LittleSister { get; }`：妹妹。`storymode_little_sister`。
- `static Hero ImperialMentor { get; }`：Istiana，帝国导师。**玩家选边后被 `DisableHeroAction.Apply` 永久禁用**。
- `static Hero AntiImperialMentor { get; }`：Arzagos，反帝国导师。同样选边后禁用。
- `static Hero Tacitus { get; }`：教学 NPC。
- `static Hero Radagos { get; }`：教学 NPC。
- `static Hero RadagosHenchman { get; }`：Radagos 的跟班。
- `internal StoryModeHeroes()`：**构造函数是 internal**。外部（含 mod 程序集）不能 new，只能通过 `StoryModeManager.InitializeStoryModeObjects()` 拿。这是刻意封死重复创建的。

## 使用示例

```csharp
// 1) 取导师：必须先确认这是主线战役且加载已完成
StoryModeManager manager = StoryModeManager.Current;
if (manager != null && manager.StoryModeHeroes != null)
{
    MainStoryLine line = manager.MainStoryLine;
    Hero mentor = line.IsOnAntiImperialQuestLine
        ? StoryModeHeroes.AntiImperialMentor
        : StoryModeHeroes.ImperialMentor;
    Debug.Print("当前导师：" + mentor.Name);
}

// 2) 用对话标签把导师认出来（IsIstianaTag 的实现就是这个）
public override bool IsApplicableTo(CharacterObject character)
{
    return StoryModeHeroes.ImperialMentor.CharacterObject == character;
}

// 3) 家族成员在哪：读 mentors/兄弟的定位靠 MainStoryLine 存的聚落
Hero brother = StoryModeHeroes.ElderBrother;
Debug.Print(brother.HomeSettlement);  // 由 FirstPhaseCampaignBehavior 预留的房子

// 4) cheat 里就是靠这批 Hero 加人（StoryModeCheats.AddFamilyMembers）
Hero[] family = { StoryModeHeroes.LittleBrother, StoryModeHeroes.ElderBrother, StoryModeHeroes.LittleSister };
foreach (Hero hero in family)
{
    AddHeroToPartyAction.Apply(hero, MobileParty.MainParty, true);
    hero.Clan = Clan.PlayerClan;
}
```

## 风险与边界

- **非主线战役必崩**：`StoryModeManager.Current` 为 null 时所有静态属性抛异常，没有兜底返回值。任何 UI / 模型 / 结算代码里都要先判战役类型。
- **加载时序**：`InitializeFirstStep` 之前 `Current.StoryModeHeroes` 是 null。在 `OnGameStart` 的注册回调里访问会崩。
- **不存档**：这些 `Hero` 由存档系统作为 `MBObjectManager` 对象持久化，不是本类的字段。要在存档里保留引用，别自己缓存到静态字段。
- **`CreateBasicHero` 失败即 null**：源码对每个调用都做 `if (CreateBasicHero(...))` 或直接 out 参数，没有 null 检查。任一 id 在你的 mod 里被改掉，对应属性就永久为 null 而没有任何报错。
- **导师不可复活**：`MainStoryLine.SetStoryLineSide` 会 `DisableHeroAction.Apply` 禁用两位导师，没有反操作。
- **名字依赖母亲的 `CharacterObject`**：`GetName` 那几处用 `@object.Culture.StringId` 去 `GameTexts.FindText`，母亲建失败会连带影响弟弟妹妹的名字。

## 依赖关系

- [StoryModeManager](../StoryModeManager) — `InitializeStoryModeObjects()` 创建本对象，所有静态属性都经它转发
- [MainStoryLine](../MainStoryLine) — 选边时禁用两位导师；也持有导师所在聚落
- [IsIstianaTag](../IsIstianaTag) / [IsStoryModeMentorTag](../IsStoryModeMentorTag) — 直接引用本类的导师属性做对话标签判定
- [StoryModeCheats](../StoryModeCheats) — `add_family_members` cheat 直接用本类的手足属性
- [CampaignStoryMode](../CampaignStoryMode) — 加载状态机里触发 `InitializeStoryModeObjects` 的地方