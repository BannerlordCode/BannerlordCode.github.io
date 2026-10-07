---
title: "CampaignGameMode"
description: "战役模式的三值枚举：None / Campaign / Tutorial。它决定 Campaign 初始化时装配哪一批 GameModel，是新游戏与编辑器场景之间的唯一分歧点。"
---

# CampaignGameMode

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public enum CampaignGameMode`
**Base:** 无（枚举，仅 3 个值）
**Source:** `bannerlord-1.5.3/TaleWorlds.CampaignSystem/CampaignGameMode.cs`

## 概述

`CampaignGameMode` 是一个只有三个值的枚举，用来标记「这次战役是哪一种」。它**不是**游戏类型、也不是难度、也不是地图 id：它唯一的作用是让 [Campaign](../Campaign) 在初始化期决定要不要装载玩法相关的 [GameModels](../GameModels)（大部分 `Default*Model` 只在 `Campaign` 与 `Tutorial` 两种模式下装配）。整个游戏里没有第四种模式，也没有运行时切换。

## 心智模型

它是一个**构造期参数**，被原样传给 `Campaign` 的构造函数：

- `SandBox.GauntletUI.GauntletCampaignStartingOptionsView`（正常新游戏）传 `CampaignGameMode.Campaign`；
- `SandBox.EditorSceneMissionManager`（编辑器/场景预览用的临时战役）传 `CampaignGameMode.Tutorial`；
- `None` 是默认值，出现在还没被赋值的字段上（例如 `GameModels.GetSpecificGameBehaviors()` 在 mode 既非 `Campaign` 也非 `Tutorial` 时会整段跳过模型装配）。

`GameModels.GetSpecificGameBehaviors()` 的判断就是一个典型用例：只有 `Campaign` 或 `Tutorial` 才会去 `GetGameModel<CharacterDevelopmentModel>()` 等把 100 多个模型属性填满。也就是说 **`None` 战役里 `Campaign.Current.Models.XxxModel` 会是 `null`**，任何解引用都是 NRE。

**常见误用与坑**

1. 在 `OnGameStart` 里判断「玩家是不是新手教程」——用 `CampaignGameMode.Tutorial` 判断会误伤编辑器场景里的战役；真正的教程状态要看任务/场景状态，不看这个枚举。
2. 假设 `GameMode` 在战役运行中不变：它在构造时定下，读取属性 `Campaign.Current.GameMode` 只是读存档无关的常量。
3. 在 mod 的自定义战役工厂里传 `None`，结果 `Models` 大面积为 null，症状是「进游戏第一步就 NRE，堆栈指向某个 Model 属性」。
4. 拿它当存档字段：它没有 `[SaveableField]`，也不需要，因为每次启动都会重新构造。

## 怎么用

### 怎么拿到它

它只有一个读取点：`Campaign.Current.GameMode`（`Campaign.cs:542`，带 `[SaveableProperty(37)]`，setter 是 private）。值在战役对象构造那一刻就定死——构造函数签名是 `public Campaign(CampaignGameMode gameMode, AdvancedStartOptionsData startOptions)`（`Campaign.cs:581`），全代码库只有三个 `new Campaign` 调用点：正常新游戏与开局设置界面都传 `CampaignGameMode.Campaign`（`SandBoxViewSubModule.cs:320`、`GauntletCampaignStartingOptionsView.cs:89`），编辑器场景传 `CampaignGameMode.Tutorial`（`EditorSceneMissionManager.cs:45`）。`None` 没有任何调用点使用。

因为它是存档字段（`Campaign.cs:542`），读档后它会从存档恢复，不需要重新判断。

### 典型用法

```csharp
// 判定当前是不是完整战役：原生代码的通行写法
bool inFullCampaign = Campaign.Current.GameMode == CampaignGameMode.Campaign;

// 教程战役里要跳过的东西，就用反向判断
if (Campaign.Current.GameMode != CampaignGameMode.Campaign)
    return;

// 场景初始化时把玩法开关写进 mission 组件（原生 SandBoxMissions.cs:54 就是这么用的）
PlayingInCampaignMode = (Campaign.Current.GameMode == CampaignGameMode.Campaign);
```

### 最容易踩的坑

用 `!=` 把 `None` 和 `Tutorial` 一起放行，或者反过来只判 `== Campaign` 就以为覆盖了全部情况。后果是教程战役里少跑了一大块逻辑：`SandBoxHelpers.cs:126`、`SandBoxHelpers.cs:154` 用的是 `!= Campaign` 直接 early-return，而 `SandBox/CampaignBehaviors/BoardGameCampaignBehavior.cs:220`、`ClanMemberRolesCampaignBehavior.cs:196` 也都是 `!= Campaign`。你如果只写 `if (GameMode == Tutorial) return;`，`None` 这条路径会被漏掉，而官方约定是把它当非战役处理。另外这个值不能自己改——setter 是 private，想在运行时切模式没有任何受支持的入口。

## 成员与调用时机

- `None`：未指定 / 纯数据战役。`GameModels` 不会装配玩法模型，除非你自己往 starter 里 `AddModel`。读 `Campaign.Current.Models.*` 前必须判空。
- `Campaign`：正常沙盒战役。所有官方玩法模型已装配，是绝大多数 mod 的运行环境。
- `Tutorial`：教程 / 编辑器场景战役。模型装配与 `Campaign` 相同，但周边系统（`SandBoxManager`、UI 流程）走的是编辑器那套。想在教程场景里跑自己的逻辑时要小心，官方很多假设「玩家只有一个城镇」。

读取方式统一是 `Campaign.Current.GameMode`，或者在你自己的战役工厂里把它传给构造函数。

## 真实示例

```csharp
// 自定义战役工厂：明确传 Campaign，让 GameModels 完成装配
private Campaign MyCreateCampaign(AdvancedStartOptionsData options)
{
    return new Campaign(CampaignGameMode.Campaign, options);
}

// 在回调里判断是否编辑器/教程场景，从而跳过正式战役专属逻辑
private void OnSessionStart()
{
    if (Campaign.Current.GameMode == CampaignGameMode.Campaign)
    {
        Campaign.Current.IncidentManager.RegisterEvents();
    }
    else
    {
        Debug.Print("editor/tutorial scenario: skip sandbox rules");
    }
}
```

## 风险与边界

- **默认值静默失败**：传 `None` 不会抛异常，只会让你在稍后的某个 NRE 里发现模型没装。这是 mod 崩溃最常见的根因之一，排查崩溃时先确认 `GameMode`。
- **无存档影响**：枚举不进存档，读档后由创建战役的工厂重新决定。旧存档不会因为枚举改名而坏。
- **序列化无关**：`Enum` 本身如果出现在你自定义的存档字段里，会按数值存；一旦有人调整顺序就会读档出错。用它时优先存字符串或自有枚举。
- **跨域可见性**：枚举定义在 CampaignSystem 层，被 [CampaignGameStarter](../CampaignGameStarter) 的注册流程与 ScreenSystem 侧读取，但它本身不引用任何引擎/界面类型，可以安全地在任何层引用。

## 依赖关系

- [Campaign](../Campaign) — 构造函数接收本枚举，并通过 `GameMode` 属性对外暴露
- [GameModels](../GameModels) — 按本枚举决定是否装配 100 多个玩法模型属性
- [CampaignGameStarter](../CampaignGameStarter) — 注册行为与模型的入口，模型装配结果由它收集