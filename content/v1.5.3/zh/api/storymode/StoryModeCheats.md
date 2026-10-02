---
title: "StoryModeCheats"
description: "主线专用的控制台作弊入口：一个通用可用性守卫，加一个把三个家人塞进玩家队伍的作弊命令。"
---
# StoryModeCheats

**Namespace:** StoryMode
**Module:** StoryMode
**Type:** `public static class StoryModeCheats`
**Base:** `System.Object`（纯静态类）
**Source:** `bannerlord-1.5.3/StoryMode/StoryModeCheats.cs`

## 概述

主线战役在控制台命令体系里的两个扩展点：一个 `CheckCheatUsage` 守卫，负责确认「当前确实是主线战役且允许作弊」，以及一个通过 `[CommandLineArgumentFunction("add_family_members", "storymode")]` 注册的作弊命令，把主角的三个家人直接拉进玩家队伍并改氏族。

## 心智模型

守卫是两层的：

1. `CampaignCheats.CheckCheatUsage(ref message)` —— 引擎侧的通用检查（是否在允许作弊的环境、是否合法使用等）。失败时它自己会填 `message` 并返回 false。
2. `StoryModeManager.Current == null` —— 主线专属的第二层。失败时把 `message` 覆盖成 `"Game mode is not correct!"`。

任何主线作弊命令**必须先过这道守卫**，否则会把剧情状态改坏。这也解释了为什么 `NotStoryMode` 常量的值是那句英文提示——它是失败分支的文案来源。

`AddFamilyMembers` 的实现分两步，且**第二步是有意的副作用**：

```csharp
AddHeroToPartyAction.Apply(hero, MobileParty.MainParty, true);
hero.Clan = Clan.PlayerClan;     // 直接改氏族，不是走 GameplayAction
```

`AddHeroToPartyAction` 只是把人加进队伍；把氏族改成玩家氏族是直接赋值。这意味着**这三个人在加入队伍的瞬间就换氏族**，不会触发正常的氏族变更流程（不会有忠诚度重算、不会通知原氏族）。

**坑**：

1. **`hero.Clan = Clan.PlayerClan` 是裸赋值**。跳过 `ChangeClanAction` 的全部副作用：与原氏族的关系、封地、部队编入逻辑都可能不一致。
2. **三个人是硬编码的**：哥哥、弟弟、妹妹。父母、导师不在列表里。
3. **`MobileParty.MainParty` 无判空**：主队伍不存在时 `AddHeroToPartyAction.Apply` 会崩。
4. **`CheckCheatUsage(ref string message)` 必须传 ref**：签名是 `ref string`，不能省掉 `ref` 关键字。
5. **返回值语义不一致**：`CheckCheatUsage` 返回 `bool`，`AddFamilyMembers` 返回 `string`（成功路径固定 `"Success"`，失败路径返回 `empty`——也就是空字符串，不是那句错误提示）。**失败时拿不到原因**，`message` 被 `CheckCheatUsage` 内部改掉了但没返回出来。
6. **`NotStoryMode` 是 `public const string`**，可以直接读，但它只是文案常量，没有被 `CheckCheatUsage` 以外的地方用。

## 主要成员

- `static bool CheckCheatUsage(ref string message)`：两层守卫。非主线战役时把 `message` 设为 `"Game mode is not correct!"` 并返回 false。**这是本类最该被复用的东西**——写自己的主线相关作弊命令时，先过它。
- `[CommandLineArgumentFunction("add_family_members", "storymode")] static string AddFamilyMembers(List<string> strings)`：作弊命令。参数列表被**完全忽略**（方法体没读 `strings`）。成功返回 `"Success"`，失败返回空字符串。
- `public const string NotStoryMode`：`"Game mode is not correct!"`。

## 使用示例

```csharp
// 1) 写自己的主线作弊命令：先过守卫，再动状态
[CommandLineArgumentFunction("my_storymode_cheat", "storymode")]
public static string MyStorymodeCheat(List<string> strings)
{
    string error = string.Empty;
    if (!StoryModeCheats.CheckCheatUsage(ref error))
    {
        Debug.Print("不可用：" + error);
        return string.Empty;
    }

    MainStoryLine line = StoryModeManager.Current.MainStoryLine;
    line.CompleteTutorialPhase(true);
    return "Success";
}

// 2) 确认当前是不是主线战役（不想改状态时的只读检查）
if (StoryModeManager.Current == null)
{
    Debug.Print(StoryModeCheats.NotStoryMode);   // "Game mode is not correct!"
}

// 3) 手动复现 add_family_members 的效果（不加命令行也能跑）
if (StoryModeManager.Current != null && MobileParty.MainParty != null)
{
    List<Hero> family = new List<Hero>
    {
        StoryModeHeroes.LittleBrother,
        StoryModeHeroes.ElderBrother,
        StoryModeHeroes.LittleSister,
    };
    foreach (Hero hero in family)
    {
        AddHeroToPartyAction.Apply(hero, MobileParty.MainParty, true);
        hero.Clan = Clan.PlayerClan;
    }
}
```

## 风险与边界

- **作弊命令改变的是持久状态**：三个家人进队伍后会被存档。想给玩家做「剧情解锁」必须考虑读档后是否还成立。
- **`hero.Clan` 是裸赋值**：绕过了氏族变更流程。与原氏族的敌友关系不会重算，长期游戏里可能出现「弟弟跟原氏族还在同一个氏族列表」的脏数据。
- **失败原因不可见**：`AddFamilyMembers` 失败返回空字符串，`CheckCheatUsage` 写的 `message` 没被返回。排查只能自己打印。
- **参数列表被忽略**：控制台传什么都没影响。想参数化得自己读 `strings`。
- **`CheckCheatUsage` 只挡环境，不挡阶段**：它确认的是「是主线战役」，**不检查主线进行到哪一步**。在教学阶段强行加三个家人进队伍不会被拦，但可能在后续剧情里造成不一致。
- **`MobileParty.MainParty` 无判空**：守卫不覆盖这一点。

## 依赖关系

- [StoryModeManager](../StoryModeManager) — `Current == null` 是本类守卫的第二层判据
- [StoryModeHeroes](../StoryModeHeroes) — `AddFamilyMembers` 直接取三位家人的 Hero
- [MainStoryLine](../MainStoryLine) — 主线阶段上下文
- [StoryModeSubModule](../StoryModeSubModule) — 同模块的模块入口，命令行分组名共用 `storymode`