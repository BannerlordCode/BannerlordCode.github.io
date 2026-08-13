---
title: "SettlementAccessModel"
description: "战役层模型：决定玩家主英雄能否进入据点、领主大厅、地牢，访问特定地点，以及能否执行招募/交易/管理城镇等据点行为的准入规则。"
---
# SettlementAccessModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces  
**Module:** TaleWorlds.CampaignSystem  
**Type:** `public abstract class SettlementAccessModel : MBGameModel<SettlementAccessModel>`  
**Base:** `MBGameModel<SettlementAccessModel>`  
**File:** `TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/SettlementAccessModel.cs`

## 一句话职责

决定**玩家主英雄**能不能进某个据点（城镇/城堡/村庄）、能不能进领主大厅和地牢、能不能访问据点内的某个地点、以及能不能在据点菜单里执行招募/交易/管理城镇等动作——一句话，它是据点菜单里所有「能否进入 / 能否操作」选项的判定中心。

## 心智模型

把它当作**战役地图上的「门卫」查询模型**，而不是一个会自己改世界的系统：

- 它只回答「这个据点，主英雄能不能进 / 能不能做」，本身**不修改任何世界状态**。每次据点菜单刷新、地点进入判定、请求会面选项刷新时，引擎都会重新调用它拿最新结论。
- 被判定的一方恒为 `Hero.MainHero`（以及隐含的 `Clan.PlayerClan`、`Campaign.Current`）；输入参数是 `Settlement`（目标据点）以及具体地点字符串 / 动作枚举。
- 它位于 **Campaign 层**，由 `GameModels` 持有，单例、随战役创建、随战役销毁。战役行为（如 `PlayerTownVisitCampaignBehavior`、`EncounterGameMenuBehavior`）和 `LocationComplex` 是它的下游调用者。
- 默认实现是 `DefaultSettlementAccessModel`，逻辑围绕**阵营关系**（己方 / 同阵营 / 中立 / 交战）、**犯罪值**（`CrimeModel`）、**家族等级**、**伪装状态**和**村庄是否刚被洗劫**展开，并借助 `BribeCalculationModel` 计算贿赂金额。
- 不要自己 `new` 一个 settlement 然后去改它的字段来绕过判定——准入是**模型驱动**的，正确做法是替换 / 装饰这个模型（见下方示例）。

## 何时用 / 何时不要用

**用它：**
- 想修改「玩家能不能进某类据点 / 地点 / 能不能做某动作」的整体规则（例如：让所有中立村庄都可直接进入、让伪装状态下也能交易、给特定文化据点加特殊准入）。
- 想在据点菜单里对某个 `SettlementAction` 加新的禁用原因与提示文本。

**不要用它 / 不要用错方式：**
- 想临时在某一帧把某个选项变灰：那是 `PlayerTownVisitCampaignBehavior` 菜单条件层的事，按需改菜单条件即可，不必替换整个模型。
- 想直接改 `Settlement` 的某个字段来「开门」：`Settlement` 不持有准入状态，世界状态也不该被直接写——准入完全由这个模型在查询时算出。
- 想在非战役上下文（主菜单、任务场景里）调用它：`Campaign.Current` 此时可能为空，调用会直接崩。

## 依赖图

- 上游（持有 / 提供）：[GameModels](../GameModels/) 在战役启动时通过 `GetGameModel<SettlementAccessModel>()` 解析出当前生效实例；注册入口是 [MBSubModuleBase](../../core/MBSubModuleBase/) 的 `OnGameStart` 里的 `gameStarter.AddModel(...)`。
- 输入对象：[Settlement](../../campaign/Settlement/)（目标据点）、[Hero](../../campaign/Hero/) 的 `MainHero`、`Clan.PlayerClan`、[MobileParty](../../campaign/MobileParty/) 的 `MainParty`（判断是否在军团中）。
- 协作模型：[CrimeModel](../CrimeModel/)、[BribeCalculationModel](../BribeCalculationModel/)（默认实现会查询犯罪值与贿赂金额）。
- 下游调用方：`PlayerTownVisitCampaignBehavior`（据点菜单选项）、`EncounterGameMenuBehavior`（遭遇/围城时的进入判定）、`LocationComplex`（地点进入判定 `CanIfSettlementAccessModelLetsPlayer`）。
- 默认实现：[DefaultSettlementAccessModel](../DefaultSettlementAccessModel/)。
- 相关类型：判定结果结构 [AccessDetails](../AccessDetails/)、枚举 [AccessLevel](../AccessLevel/)、[AccessLimitationReason](../AccessLimitationReason/)、[AccessMethod](../AccessMethod/)。
- 存档与加载：见 [存档系统](../../../architecture/save-system/)；模型实例本身是 `Campaign` 对象图的一部分，但**不保存任何每档可变状态**，访问结果是每次查询即时重算。
- 模块加载顺序：见 [模块系统](../../../architecture/module-system/)——替换是否生效取决于你的 SubModule 相对 Native/SandBox 的加载顺序。

## 风险

- **替换不一定生效（加载顺序）**：`GameModels` / `CampaignGameStarter` 内部维护一个模型列表，`GetModel<T>()` 返回**列表里最后一个**匹配的实例。也就是说「后注册的覆盖先注册的」。若你的 SubModule 早于 SandBox 加载，SandBox 的 `DefaultSettlementAccessModel` 会排在你后面并胜出，你的实现根本不会被调用。务必让你的 SubModule 在 Native/SandBox 之后加载，或使用能在加载期拿到已注册实例的方式注册。
- **两个 mod 替换同一模型 = 后者通吃**：系统不会合并、也不会删除默认模型。后加载的 mod 直接遮蔽先加载的，先加载那个的 `CanMainHero...` 永远不被调用。需要「叠加」语义时，用装饰模式（见示例 1）持有并转发上一个实例，而不是完全另起炉灶。
- **围城 / 遭遇时返回错误准入会软锁或穿帮**：`EncounterGameMenuBehavior` 在玩家部队与据点相遇时调用 `CanMainHeroEnterSettlement` 来拼装「进入据点」菜单。若你无条件返回 `FullAccess`，玩家可能在围城/交战状态下直接走进去；若无条件返回 `NoAccess`，该遭遇的进入选项会全部消失，玩家可能**无法推进遭遇**。`AccessLimitationReason`/`AccessMethod` 的语义被菜单逻辑直接消费，乱填会让界面显示错乱。
- **`disableOption` 与返回值的区别**：`CanMainHeroAccessLocation` / `CanMainHeroDoSettlementAction` / `IsRequestMeetingOptionAvailable` 中，`disableOption=true` 是把菜单项**置灰并显示 `disabledText`**；`disableOption=false` 且返回 `false` 则是把菜单项**直接隐藏**。两者 UX 完全不同，别混用。
- **必须给 `out` 参数赋值**：`CanMainHeroEnterSettlement/LordsHall/Dungeon` 的 `out AccessDetails` 必须被完整赋值（C# `out` 强制），漏填会在运行期出问题；建议先 `accessDetails = default(AccessDetails);` 再填充，避免 `FailedAssert`。
- **不要在模型实例里存「跨档」状态**：模型对象随 `Campaign` 一起被序列化引用，但它自身没有自动字段存档机制。若你在自定义模型里放了字段想持久化，不标 `SaveableField` 且不注册 `SaveableCampaignTypeDefiner` 的话，读档后这些字段会复位。需要持久状态就走正规 `*Action` / 存档对象，而不是模型字段。
- **只在战役线程、Campaign 已初始化后调用**：这些方法内部读取 `Hero.MainHero`、`Clan.PlayerClan`、`Campaign.Current.Models.CrimeModel` 等全局，战役未启动时调用会空引用崩溃。

## 成员说明

模型本身是 `abstract`，需要 mod 派生实现；下面 6 个方法是引擎会调用的全部入口。判定对象恒为 `Hero.MainHero`，输入为 `Settlement` 及具体上下文。

### 据点整体 / 内部区域准入

#### `public abstract void CanMainHeroEnterSettlement(Settlement settlement, out AccessDetails accessDetails)`
判定主英雄能否进入该据点（城镇/城堡/村庄）。`accessDetails` 带回 `AccessLevel`、`AccessMethod`、`AccessLimitationReason` 等完整结论。
- **何时调用**：玩家部队接近/遭遇据点时由 `EncounterGameMenuBehavior` 调用以拼装进入菜单；据点菜单条件（`PlayerTownVisitCampaignBehavior`）也用于村庄被洗劫等提示。
- **副作用**：无，纯查询。

#### `public abstract void CanMainHeroEnterLordsHall(Settlement settlement, out AccessDetails accessDetails)`
判定能否进入领主大厅（keep）。`AccessLevel==LimitedAccess` 且 `LimitedAccessSolution==Bribe` 时，菜单会进一步用 `BribeCalculationModel.GetBribeToEnterLordsHall` 决定是否能行贿进入。
- **何时调用**：领主大厅菜单项条件、请求会面前置判定。
- **副作用**：无。

#### `public abstract void CanMainHeroEnterDungeon(Settlement settlement, out AccessDetails accessDetails)`
判定能否进入地牢/监狱。与领主大厅共用内部「keep」判定逻辑。
- **何时调用**：地牢菜单项条件。
- **副作用**：无。

### 地点与动作准入

#### `public abstract bool CanMainHeroAccessLocation(Settlement settlement, string locationId, out bool disableOption, out TextObject disabledText)`
判定能否访问据点内某个 `LocationComplex` 地点。`locationId` 形如 `"center"`、`"arena"`、`"tavern"`、`"lordshall"`、`"prison"`、`"house_1"`、`"port"` 等。返回 `true` 表示允许。
- **何时调用**：`LocationComplex.CanIfSettlementAccessModelLetsPlayer` 在进入地点前调用；`PlayerTownVisitCampaignBehavior` 对中心广场/竞技场/酒馆菜单项调用。
- **副作用**：无。`disableOption==true` 时 `disabledText` 会被显示为置灰原因。

#### `public abstract bool CanMainHeroDoSettlementAction(Settlement settlement, SettlementAction settlementAction, out bool disableOption, out TextObject disabledText)`
判定能否执行某个据点菜单动作。`settlementAction` 取值：`RecruitTroops`、`Craft`、`WalkAroundTheArena`、`JoinTournament`、`WatchTournament`、`Trade`、`WaitInSettlement`、`ManageTown`。
- **何时调用**：`PlayerTownVisitCampaignBehavior` 为每个对应菜单项条件调用（招募、交易、管理城镇、竞技场、锻造、等待等）。
- **副作用**：无。

#### `public abstract bool IsRequestMeetingOptionAvailable(Settlement settlement, out bool disableOption, out TextObject disabledText)`
判定「请求会面」对话选项是否可用（例如己方据点永远不可请求、家族等级不足时置灰等）。
- **何时调用**：据点对话菜单里请求会面选项的条件判定。
- **副作用**：无。

### 嵌套类型（结果结构）

#### `struct AccessDetails`
判定结果容器，字段全部由模型填充：
- `AccessLevel`([AccessLevel](../AccessLevel/))：`NoAccess` / `LimitedAccess` / `FullAccess`
- `AccessMethod`([AccessMethod](../AccessMethod/))：`None` / `Direct` / `ByRequest`
- `AccessLimitationReason`([AccessLimitationReason](../AccessLimitationReason/))：`None` / `HostileFaction` / `RelationshipWithOwner` / `CrimeRating` / `VillageIsLooted` / `Disguised` / `ClanTier` / `LocationEmpty`
- `LimitedAccessSolution`：`None` / `Bribe` / `Disguise`
- `PreliminaryActionObligation`：`None` / `Optional`（城镇有 Moderate/Severe 犯罪值时提示「先面对指控」）
- `PreliminaryActionType`：`None` / `FaceCharges`

> 注：`AccessDetails` 与这些枚举是 `SettlementAccessModel` 的嵌套类型，站内另有独立的 [AccessDetails](../AccessDetails/) 等页面记录其成员。

## 最小真实示例

### 示例 1：装饰（叠加）默认模型，仅改「领主大厅」准入

推荐做法——通过泛型 `AddModel<T>` 注册时，引擎会把**当前已生效的**模型传给 `Initialize`，你在 `base` 之上只改关心的行为，其余全部转发，避免与默认逻辑或其它 mod 冲突。

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.Core;
using TaleWorlds.Localization;

public class OpenLordsHallAccessModel : SettlementAccessModel
{
    private SettlementAccessModel _previous;

    // 引擎通过 AddModel<T> 注入上一个生效的模型
    public override void Initialize(SettlementAccessModel previousModel)
    {
        _previous = previousModel;
    }

    public override void CanMainHeroEnterSettlement(Settlement settlement, out AccessDetails accessDetails)
    {
        _previous.CanMainHeroEnterSettlement(settlement, out accessDetails);
    }

    public override void CanMainHeroEnterLordsHall(Settlement settlement, out AccessDetails accessDetails)
    {
        // 直接给玩家自家之外也开绿灯：只要不是交战阵营，就算 FullAccess
        if (settlement.OwnerClan != Clan.PlayerClan &&
            !FactionManager.IsAtWarAgainstFaction(Hero.MainHero.MapFaction, settlement.MapFaction))
        {
            accessDetails = new AccessDetails
            {
                AccessLevel = AccessLevel.FullAccess,
                AccessMethod = AccessMethod.Direct
            };
            return;
        }
        _previous.CanMainHeroEnterLordsHall(settlement, out accessDetails);
    }

    public override void CanMainHeroEnterDungeon(Settlement settlement, out AccessDetails accessDetails)
    {
        _previous.CanMainHeroEnterDungeon(settlement, out accessDetails);
    }

    public override bool CanMainHeroAccessLocation(Settlement settlement, string locationId, out bool disableOption, out TextObject disabledText)
    {
        return _previous.CanMainHeroAccessLocation(settlement, locationId, out disableOption, out disabledText);
    }

    public override bool CanMainHeroDoSettlementAction(Settlement settlement, SettlementAction settlementAction, out bool disableOption, out TextObject disabledText)
    {
        return _previous.CanMainHeroDoSettlementAction(settlement, settlementAction, out disableOption, out disabledText);
    }

    public override bool IsRequestMeetingOptionAvailable(Settlement settlement, out bool disableOption, out TextObject disabledText)
    {
        return _previous.IsRequestMeetingOptionAvailable(settlement, out disableOption, out disabledText);
    }
}
```

### 示例 2：在 SubModule 里注册 / 替换模型

在 `MBSubModuleBase.OnGameStart(Game game)` 里通过 `game.AddModel(...)` 注册。注意 `game.AddModel(new X())` 会把实例追加到模型列表末尾，`GetModel<T>()` 返回最后一个匹配的——因此你的实现会在默认 `DefaultSettlementAccessModel` 之后生效并**覆盖**它（前提是你的 SubModule 加载晚于 SandBox）。

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.Core;
using TaleWorlds.ModuleManager;

public class MySubModule : MBSubModuleBase
{
    protected override void OnGameStart(Game game)
    {
        base.OnGameStart(game);

        // 简单替换：直接覆盖默认实现
        game.AddModel(new OpenLordsHallAccessModel());

        // 或用泛型版本做装饰（会把当前生效模型通过 Initialize 注入进来）：
        // game.AddModel(new OpenLordsHallAccessModel());
    }
}
```

运行时通过 `Campaign.Current.Models.SettlementAccessModel` 拿到当前生效实例（引擎调用方也是这么拿的）：

```csharp
SettlementAccessModel model = Campaign.Current.Models.SettlementAccessModel;
model.CanMainHeroEnterSettlement(Settlement.CurrentSettlement, out var details);
if (details.AccessLevel == AccessLevel.NoAccess)
{
    // 该据点当前禁止进入，按 AccessLimitationReason 给用户提示
}
```

## 跨版本提示

- 1.3.0 / 1.3.15 / 1.4.5 的 `SettlementAccessModel` 抽象接口（6 个方法 + 嵌套 `AccessDetails` 及枚举）保持一致；`AccessDetails` 的 `PreliminaryActionObligation` / `PreliminaryActionType` 字段在 1.3.x 已存在。
- 替换机制（通过 `game.AddModel` 注册、`GetModel<T>()` 取最后一个匹配）在 1.3.x 起即为该形态；跨版本 mod 只需保证 `OnGameStart` 注册且 SubModule 加载顺序靠后即可。

## 参见

- ↑ [campaign-ext 索引](../)
- ↔ [DefaultSettlementAccessModel](../DefaultSettlementAccessModel/) · [GameModels](../GameModels/) · [CrimeModel](../CrimeModel/) · [BribeCalculationModel](../BribeCalculationModel/) · [SettlementLoyaltyModel](../SettlementLoyaltyModel/) · [SettlementSecurityModel](../SettlementSecurityModel/)
- 相关类：[Settlement](../../campaign/Settlement/) · [Campaign](../../campaign/Campaign/) · [Hero](../../campaign/Hero/) · [MBSubModuleBase](../../core/MBSubModuleBase/) · [AccessDetails](../AccessDetails/)
- 架构：[模块系统](../../../architecture/module-system/) · [存档系统](../../../architecture/save-system/)
