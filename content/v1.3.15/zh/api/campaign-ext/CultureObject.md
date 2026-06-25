---
title: "CultureObject"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CultureObject`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CultureObject

**命名空间:** TaleWorlds.CampaignSystem  
**模块:** TaleWorlds.CampaignSystem  
**类型:** sealed class（继承自 

`BasicCultureObject

` ?

`MBObjectBase

`?
文化/派系模板对象。每?

`CultureObject

` 描述一个文化（如帝?Empire、瓦兰迪?Vlandia）或匪盗文化，定义该文化下使用的兵种、装备、队伍模板、NPC 模板、姓名表与文化特性（Feat）。文化由 XML 定义并通过 

`MBObjectManager

` 加载?
## 概述

`CultureObject

` 是战役系统中文化的运行时表示。基础标识信息（`Name

`、`IsMainCulture

`、`IsBandit

`、`CanHaveSettlement

`、颜色与旗帜等）由基?

`BasicCultureObject

`（位?

`TaleWorlds.Core

`）提供；本类在其之上扩展了兵种引用、装备表、队伍模板、姓名列表、文化特性等战役层数据?
文化对象是不可变的引用数据：?

`MilitiaBonus

` ?

`ProsperityBonus

` 外，绝大多数属性为 

`private set

`，在 

`Deserialize

` 阶段?XML 读取后固定。模组作者通常通过 

`MBObjectManager

` ?

`StringId

` 查询已注册的文化，而不是新建实例?
## 
## 心智模型

先把 `CultureObject` 当作这个子系统的入口或数据节点来理解：先看属性代表什么状态，再看方法允许你做什么。
继承属性（来自 BasicCultureObject?
\| 名称 \| 类型 \| 描述 \|
\|------\|------\|------\|
\| Name \| TextObject \| 文化显示名称 \|
\| StringId \| string \| 唯一字符串标识（继承?

`MBObjectBase

`?\|
\| IsMainCulture \| bool \| 是否为主文化（可建立王国的文化） \|
\| IsBandit \| bool \| 是否为匪盗文?\|
\| CanHaveSettlement \| bool \| 是否可拥有定居点 \|
\| Color \| uint \| 主色（ARGB?\|
\| Color2 \| uint \| 副色（ARGB?\|
\| ClothAlternativeColor \| uint \| 衣物备用主色 \|
\| ClothAlternativeColor2 \| uint \| 衣物备用副色 \|
\| BackgroundColor1 \| uint \| 旗帜背景?1 \|
\| ForegroundColor1 \| uint \| 旗帜前景?1 \|
\| BackgroundColor2 \| uint \| 旗帜背景?2 \|
\| ForegroundColor2 \| uint \| 旗帜前景?2 \|
\| Banner \| Banner \| 文化旗帜 \|
\| EncounterBackgroundMesh \| string \| 遭遇战背景网格资源名 \|

## 标识与杂项属?
\| 名称 \| 类型 \| 描述 \|
\|------\|------\|------\|
\| Traits \| CultureTrait[] \| 文化特性标签数?\|
\| EncyclopediaText \| TextObject \| 百科条目文本 \|
\| StartingPoint \| CampaignVec2 \| 该文化的地图起始?\|
\| BoardGame \| BoardGameType \| 该文化使用的棋盘游戏类型 \|
\| NavalFactor \| float \| 海军因子（影响海上活动） \|
\| DefaultCharacterCreationBodyProperty \| MBBodyProperty \| 角色创建默认身体属?\|
\| MilitiaBonus \| int \| 民兵加成（可读写，运行时可调?\|
\| ProsperityBonus \| int \| 繁荣度加成（可读写，运行时可调） \|

## 兵种属?
均为 

`CharacterObject

`，`private set

`，由 XML 引用解析得到?
\| 名称 \| 描述 \|
\|------\|------\|
\| BasicTroop \| 基础兵种 \|
\| EliteBasicTroop \| 精锐基础兵种 \|
\| MeleeMilitiaTroop \| 近战民兵 \|
\| MeleeEliteMilitiaTroop \| 近战精锐民兵 \|
\| RangedMilitiaTroop \| 远程民兵 \|
\| RangedEliteMilitiaTroop \| 远程精锐民兵 \|
\| MilitiaVeteranArcher \| 民兵老兵弓手 \|
\| TournamentMaster \| 比武大会大师 \|
\| Villager \| 村民 \|
\| CaravanMaster \| 商队队长 \|
\| CaravanGuard \| 商队护卫 \|
\| PrisonGuard \| 监狱守卫 \|
\| Guard \| 守卫 \|
\| Blacksmith \| 铁匠 \|
\| Weaponsmith \| 武器?\|
\| Armorer \| 盔甲?\|
\| HorseMerchant \| 马商 \|
\| Barber \| 理发?\|
\| Merchant \| 商人 \|
\| Tavernkeeper \| 酒馆老板 \|
\| TavernGamehost \| 酒馆游戏主持 \|
\| Musician \| 乐师 \|
\| TavernWench \| 酒馆女招?\|
\| RansomBroker \| 赎金经纪?\|
\| GangleaderBodyguard \| 帮派头目保镖 \|
\| ShopWorker \| 店铺伙计 \|
\| Beggar \| 男乞?\|
\| FemaleBeggar \| 女乞?\|
\| FemaleDancer \| 舞女 \|
\| Shipwright \| 造船?\|
\| GearDummy \| 装备假人 \|
\| MerchantNotary \| 商人公证?\|
\| ArtisanNotary \| 工匠公证?\|
\| PreacherNotary \| 传教士公证员 \|
\| RuralNotableNotary \| 乡村要人公证?\|
\| Townsman / Townswoman \| 城镇?女市?\|
\| TownsmanInfant / TownswomanInfant \| 城镇?女婴 \|
\| TownsmanChild / TownswomanChild \| 城镇?女童 \|
\| TownsmanTeenager / TownswomanTeenager \| 城镇?女少?\|
\| VillageWoman \| 村庄妇女 \|
\| VillagerMaleChild / VillagerFemaleChild \| 村庄?女童 \|
\| VillagerMaleTeenager / VillagerFemaleTeenager \| 村庄?女少?\|
\| BanditChief \| 匪首 \|
\| BanditRaider \| 匪徒劫掠?\|
\| BanditBandit \| 普通匪?\|
\| BanditBoss \| 匪帮头目 \|

## NPC 模板与列?
\| 名称 \| 类型 \| 描述 \|
\|------\|------\|------\|
\| NotableTemplates \| MBReadOnlyList&lt;CharacterObject&gt; \| 要人模板 \|
\| LordTemplates \| MBReadOnlyList&lt;CharacterObject&gt; \| 领主模板 \|
\| RebelliousHeroTemplates \| MBReadOnlyList&lt;CharacterObject&gt; \| 叛乱英雄模板 \|
\| BasicMercenaryTroops \| MBReadOnlyList&lt;CharacterObject&gt; \| 基础雇佣兵兵?\|
\| TournamentTeamTemplatesForOneParticipant \| MBReadOnlyList&lt;CharacterObject&gt; \| 单人参赛锦标赛队伍模?\|
\| TournamentTeamTemplatesForTwoParticipant \| MBReadOnlyList&lt;CharacterObject&gt; \| 双人参赛锦标赛队伍模?\|
\| TournamentTeamTemplatesForFourParticipant \| MBReadOnlyList&lt;CharacterObject&gt; \| 四人参赛锦标赛队伍模?\|
\| MaleNameList \| MBReadOnlyList&lt;TextObject&gt; \| 男性姓名表 \|
\| FemaleNameList \| MBReadOnlyList&lt;TextObject&gt; \| 女性姓名表 \|
\| ClanNameList \| MBReadOnlyList&lt;TextObject&gt; \| 氏族姓名?\|
\| CultureFeats \| MBReadOnlyList&lt;FeatObject&gt; \| 文化特性列?\|
\| DefaultPolicyList \| MBReadOnlyList&lt;PolicyObject&gt; \| 默认政策列表 \|
\| PossibleClanBannerIconsIDs \| MBReadOnlyList&lt;int&gt; \| 可用氏族旗帜图标 ID \|
\| VassalRewardItems \| MBReadOnlyList&lt;ItemObject&gt; \| 封臣奖励物品 \|
\| BannerBearerReplacementWeapons \| MBReadOnlyList&lt;ItemObject&gt; \| 旗手替换武器 \|
\| AvailableShipHulls \| MBList&lt;ShipHull&gt; \| 可用船体 \|

## 装备表属?
均为 

`MBEquipmentRoster

`，`private set

`?
\| 名称 \| 描述 \|
\|------\|------\|
\| DefaultBattleEquipmentRoster \| 默认战斗装备?\|
\| DefaultCivilianEquipmentRoster \| 默认民用装备?\|
\| DefaultStealthEquipmentRoster \| 默认潜行装备?\|
\| DuelPresetEquipmentRoster \| 决斗预设装备?\|
\| MarriageBrideEquipmentRoster \| 婚礼新娘装备?\|

## 队伍模板属?
\| 名称 \| 类型 \| 描述 \|
\|------\|------\|------\|
\| DefaultPartyTemplate \| PartyTemplateObject \| 默认队伍模板 \|
\| VillagerPartyTemplate \| PartyTemplateObject \| 村民队伍模板 \|
\| FishingPartyTemplate \| PartyTemplateObject \| 渔民队伍模板 \|
\| MilitiaPartyTemplate \| PartyTemplateObject \| 民兵队伍模板 \|
\| RebelsPartyTemplate \| PartyTemplateObject \| 叛军队伍模板 \|
\| BanditBossPartyTemplate \| PartyTemplateObject \| 匪帮头目队伍模板 \|
\| VassalRewardTroopsPartyTemplate \| PartyTemplateObject \| 封臣奖励部队模板 \|
\| SettlementPatrolPartyTemplateWeak \| PartyTemplateObject \| 定居点巡逻队（弱?\|
\| SettlementPatrolPartyTemplateModerate \| PartyTemplateObject \| 定居点巡逻队（中等） \|
\| SettlementPatrolPartyTemplateStrong \| PartyTemplateObject \| 定居点巡逻队（强?\|
\| SettlementPatrolPartyTemplateNaval \| PartyTemplateObject \| 定居点海上巡逻队 \|
\| CaravanPartyTemplates \| MBList&lt;PartyTemplateObject&gt; \| 商队队伍模板列表 \|
\| EliteCaravanPartyTemplates \| MBList&lt;PartyTemplateObject&gt; \| 精锐商队队伍模板列表 \|

## 方法

### HasTrait

`

`

`csharp
public bool HasTrait(CultureTrait trait)
`

`

`

判断该文化是否拥有指定文化特性标签?
**参数:**
- 

`trait

` - 要检查的 

`CultureTrait

`

**返回:** ?

`Traits

` 包含该标签则?true?
### HasFeat

`

`

`csharp
public bool HasFeat(FeatObject feat)
`

`

`

判断该文化是否拥有指定文化特性（Feat）?
**参数:**
- 

`feat

` - 要检查的 

`FeatObject

`

**返回:** ?

`CultureFeats

` 包含该特性则?true?
### GetCulturalFeats

`

`

`csharp
public IEnumerable&lt;FeatObject&gt; GetCulturalFeats(Func&lt;FeatObject, bool&gt; predicate = null)
`

`

`

按可选谓词筛选返回该文化的特性序列。`predicate

` ?null 时返回全部?
### GetName

`

`

`csharp
public override TextObject GetName()
`

`

`

返回 

`Name

`（基?

`BasicCultureObject.Name

`）?
### ToString

`

`

`csharp
public override string ToString()
`

`

`

返回 

`Name.ToString()

`?
### Deserialize

`

`

`csharp
public override void Deserialize(MBObjectManager objectManager, XmlNode node)
`

`

`

?XML 节点解析文化对象。读取所有属性、兵种引用、装备表、队伍模板、姓名表、政策、特性等。模组作者一般无需直接调用?
## BoardGameType 枚举

`

`

`csharp
public enum BoardGameType
{
    None = -1,
    Seega,
    Puluc,
    Konane,
    MuTorere,
    Tablut,
    BaghChal,
    Total
}
`

`

`

## 使用示例

`

`

`csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.ObjectSystem;

// ?StringId 查找文化（如 "vlandia"?empire"?CultureObject vlandia = MBObjectManager.Instance.GetObject&lt;CultureObject&gt;("vlandia");
if (vlandia != null)
{
    Debug.Print("文化: " + vlandia.Name);
    Debug.Print("是否匪盗文化: " + vlandia.IsBandit);
    Debug.Print("基础兵种: " + vlandia.BasicTroop.Name);
}

// 遍历所有文?foreach (CultureObject culture in MBObjectManager.Instance.GetObjectTypeList&lt;CultureObject&gt;())
{
    if (culture.IsMainCulture)
    {
        Debug.Print("主文? " + culture.Name);
    }
}

// 检查文化特?foreach (FeatObject feat in vlandia.GetCulturalFeats())
{
    Debug.Print("特? " + feat.Name);
}

// 等价访问器：通过 Game.Current.ObjectManager
CultureObject empire = Game.Current.ObjectManager.GetObject&lt;CultureObject&gt;("empire");
`

`

`

## 参见

- [Settlement](./Settlement)
- [PartyTemplate](./PartyTemplate)
- [Campaign-Ext 索引](./)
