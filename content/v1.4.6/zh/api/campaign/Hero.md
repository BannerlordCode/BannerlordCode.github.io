---
title: "Hero"
description: "sealed 的领主实体：身份与状态（CharacterStates）、属性技能特质、家族、队伍、财富关系，以及一整套可触发的否决查询。"
---
# Hero

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public sealed class Hero : MBObjectBase, ITrackableCampaignObject, ITrackableBase, IRandomOwner`
**Source:** `TaleWorlds.CampaignSystem/Hero.cs`

## 概述

`Hero` 是战役里的人物实体，继承 `MBObjectBase`。它把「一个人」拆成四层：`CharacterObject` 是不可变的兵种/人物模板（长相、职业、装备槽），`Hero` 是在这个模板上叠加的**可变战役状态**——家族、队伍、财富、关系、技能等级、特质、天赋、伤病、俘虏状态。

它是 `sealed` 的。1.4.6 的 `Hero.cs` 里没有可继承的扩展点，因此 mod 只能通过 Behavior、事件与动作 API 修改领主，不能派生自己的 Hero 子类。想加自定义字段，要么挂 `Campaign.Current.AddEntityComponent<T>()`，要么放在 Behavior 里走 `IDataStore`。

它有三条访问路径：`Hero.MainHero`（静态，玩家领主）、`Hero.AllAliveHeroes` / `Hero.DeadOrDisabledHeroes`（静态集合）、以及 `Hero.Find(stringId)` / `Hero.FindFirst(predicate)` / `Hero.FindAll(predicate)`（静态查询）。这些静态入口全部转发给 `Campaign.Current`，战役未建立时会抛 `NullReferenceException`。

## 心智模型

一个领主的存在顺序是：`new Hero(stringId, characterObject, birthDay)` → `MBObjectManager.Instance.RegisterObject<Hero>(...)` → XML 加载时 `Deserialize` 填模板与初始状态 → `ChangeState(CharacterStates.Active)` 上地图。

状态机是 `Hero.CharacterStates`，共 8 个值：`NotSpawned`（模板态，未进战役）、`Active`（在地图上）、`Fugitive`（逃犯）、`Prisoner`（被俘）、`Released`（被释放待安置）、`Dead`、`Disabled`、`Traveling`（旅行中）。**切换状态要走 `ChangeState`**，直接赋值字段是做不到的（没有 setter）。

判定顺序上有一个常被忽略的坑：`IsAlive` 与 `IsDead` 不是严格互为补集——`IsAlive` 只在 `Active` / `Prisoner` / `Released` / `Traveling` 等非死亡状态为真，而 `IsActive` 只在 `Active` 为真。写「还活着并且在地图上」的判断要用 `IsActive`，不要用 `IsAlive`。

三个常见误用。一是**在 `DailyTickEvent` 里遍历 `Hero.AllAliveHeroes`**：用 `CampaignEvents.DailyTickHeroEvent` 代替，它逐个触发，缓存维护天然按领主分片。二是**直接改 `HitPoints`**：负伤/濒死由 `HeroState` 与 `IsWounded` 推导，改数值不同步状态会出现「血量为 0 但 IsDead 为 false」。三是**缓存 `Hero` 引用**：领主被 `UnregisterObject` 后 `OnHeroUnregisteredEvent` 触发，此后访问会读到失效对象。

## 关键成员

### 身份与模板

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `CharacterObject` | `public CharacterObject CharacterObject` | 该领主使用的不可变人物模板。改外观要走它，不是改 `Hero` |
| `Template` | `public CharacterObject Template` | XML 定义里的模板对象，通常与 `CharacterObject` 同源 |
| `FirstName` | `public TextObject FirstName` | 名 |
| `Name` | `public TextObject Name` | 全名（本地化） |
| `SetName` | `public void SetName(TextObject fullName, TextObject firstName)` | 同时设置全名与名。两者都会进存档 |
| `SetTextVariables` | `public void SetTextVariables()` | 重建 `Name` / `FirstName` 的文本变量替换结果。改过模板后要重调 |
| `EncyclopediaText` | `public TextObject EncyclopediaText { get; set; }` | 百科条目正文 |
| `EncyclopediaLink` | `public string EncyclopediaLink` | 百科链接地址 |
| `EncyclopediaLinkWithName` | `public TextObject EncyclopediaLinkWithName` | 带名字的链接文本 |
| `SetHeroEncyclopediaTextAndLinks` | `public static TextObject SetHeroEncyclopediaTextAndLinks(Hero o)` | 静态：按模板刷新指定领主的百科文本 |
| `Culture` | `public CultureObject Culture` | 文化，影响技能上限与关系衰减 |
| `StaticBodyProperties` | `public StaticBodyProperties StaticBodyProperties { get; set; }` | 体型静态属性块 |
| `BodyProperties` | `public BodyProperties BodyProperties` | 体型属性块（体重、身高、年龄等） |
| `Weight` / `Build` | `public float Weight { get; set; }` / `public float Build { get; set; }` | 体重与体型评分 |
| `IsFemale` | `public bool IsFemale { get; set; }` | 性别 |
| `ModifyHair` | `public void ModifyHair(int hair, int beard, int tattoo)` | 一次性修改发型、胡须与纹身槽位 |
| `HiddenInEncyclopedia` | `public bool HiddenInEncyclopedia` | 是否从百科隐藏。模板生成的同名假人会设它 |
| `SpecialItems` | `public MBList<ItemObject> SpecialItems` | 该领主专属持有的物品 |

### 状态机与生死

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `HeroState` | `public Hero.CharacterStates HeroState` | 当前状态值。读它，不要试图直接赋值 |
| `ChangeState` | `public void ChangeState(Hero.CharacterStates newState)` | 切换状态的唯一入口。会连带更新队伍、俘虏名册与事件 |
| `Hero.CharacterStates` | `NotSpawned` / `Active` / `Fugitive` / `Prisoner` / `Released` / `Dead` / `Disabled` / `Traveling` | 八个状态值的嵌套枚举 |
| `IsDead` | `public bool IsDead` | 是否已死亡 |
| `IsAlive` | `public bool IsAlive` | 是否处于非死亡状态。比 `!IsDead` 更精确 |
| `IsActive` | `public bool IsActive` | 是否在地图上活动。做「在场」判断用这个 |
| `IsNotSpawned` | `public bool IsNotSpawned` | 是否还是模板态 |
| `IsDisabled` | `public bool IsDisabled` | 是否被禁用 |
| `IsFugitive` | `public bool IsFugitive` | 是否逃犯 |
| `IsPrisoner` | `public bool IsPrisoner` | 是否被俘 |
| `IsReleased` | `public bool IsReleased` | 是否已被释放待安置 |
| `IsTraveling` | `public bool IsTraveling` | 是否旅行中 |
| `IsWounded` | `public bool IsWounded` | 是否负伤 |
| `DeathMark` | `public KillCharacterAction.KillCharacterActionDetail DeathMark { get; private set; }` | 死因标记（被处决、战死、狱中死亡等） |
| `DeathMarkKillerHero` | `public Hero DeathMarkKillerHero { get; private set; }` | 造成死亡的领主；无具体凶手时为 null |
| `AddDeathMark` | `public void AddDeathMark(Hero killerHero = null, KillCharacterAction.KillCharacterActionDetail deathMarkDetail = None)` | 登记死因标记，不改状态 |
| `MakeWounded` | `public void MakeWounded(Hero killerHero = null, KillCharacterAction.KillCharacterActionDetail deathMarkDetail = None)` | 打伤：血量归零但不死，同时记录凶手与死因 |
| `HitPoints` | `public int HitPoints` | 当前生命值 |
| `MaxHitPoints` | `public int MaxHitPoints` | 生命上限 |
| `IsHealthFull` | `public bool IsHealthFull()` | 血量是否已满 |
| `Heal` | `public void Heal(int healAmount, bool addXp = false)` | 回血。`addXp` 为 true 时同步给经验 |
| `WoundedHealthLimit` | `public int WoundedHealthLimit` | 负伤状态下的血量阈值 |
| `ProbabilityOfDeath` | `public float ProbabilityOfDeath` | 当前死亡概率，战斗与伤病系统使用 |
| `BirthDay` | `public CampaignTime BirthDay` | 出生日期 |
| `DeathDay` | `public CampaignTime DeathDay` | 死亡日期；未死时为无效 `CampaignTime` |
| `SetBirthDay` / `SetDeathDay` | `public void SetBirthDay(CampaignTime birthday)` / `public void SetDeathDay(CampaignTime deathDay)` | 修改日期。改死亡日期不会自动改状态 |
| `Age` | `public float Age` | 当前年龄（游戏年内） |
| `IsChild` | `public bool IsChild` | 是否未成年 |
| `IsWanderer` / `IsTemplate` | `public bool IsWanderer` / `public bool IsTemplate` | 是否流浪汉 / 是否只是模板 |

### 家族、队伍与位置

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `Clan` | `public Clan Clan` | 所属家族。为 null 表示游离 |
| `OriginClan` | `public Clan OriginClan` | 出身家族，与 `Clan` 可能不同（入赘、叛离） |
| `SupporterOf` | `public Clan SupporterOf` | 效忠对象，未与 `Clan` 合并时用它 |
| `CompanionOf` | `public Clan CompanionOf` | 作为同伴时所属的主人家族 |
| `IsFactionLeader` / `IsKingdomLeader` / `IsClanLeader` | 各自 `public bool` | 是否为势力领袖 / 王国领袖 / 家族领袖 |
| `MapFaction` | `public IFaction MapFaction` | 该领主当前在地图上代表的势力 |
| `PartyBelongedTo` | `public MobileParty PartyBelongedTo` | 所属队伍；不在队伍时为 null |
| `PartyBelongedToAsPrisoner` | `public PartyBase PartyBelongedToAsPrisoner { get; private set; }` | 作为俘虏被关押在哪支队伍 |
| `IsPartyLeader` | `public bool IsPartyLeader` | 是否是队伍领袖 |
| `CurrentSettlement` | `public Settlement CurrentSettlement` | 当前所在定居点；在野外时为 null |
| `StayingInSettlement` | `public Settlement StayingInSettlement` | 正在其中「停留」的定居点 |
| `HomeSettlement` | `public Settlement HomeSettlement` | 归属定居点 |
| `UpdateHomeSettlement` | `public void UpdateHomeSettlement()` | 按当前所在地重算 `HomeSettlement` |
| `BornSettlement` | `public Settlement BornSettlement` | 出生地 |
| `LastKnownClosestSettlement` | `public Settlement LastKnownClosestSettlement { get; private set; }` | 玩家最后已知的最近定居点（迷雾系统用） |
| `UpdateLastKnownClosestSettlement` | `public void UpdateLastKnownClosestSettlement(Settlement settlement)` | 手动更新最后已知位置 |
| `GetPositionAsVec3` | `public Vec3 GetPositionAsVec3()` | 三维位置（定居点内为当地点坐标） |
| `GetCampaignPosition` | `public CampaignVec2 GetCampaignPosition()` | 战役地图坐标。在定居点内时可能返回一个无效值 |
| `GetMapPoint` | `public IMapPoint GetMapPoint()` | 作为 `IMapPoint` 的自身引用，供距离模型使用 |
| `ClanBanner` | `public Banner ClanBanner` | 家族旗帜 |
| `BannerItem` | `public EquipmentElement BannerItem` | 本人携带的旗帜物品 |
| `GovernorOf` | `public Town GovernorOf` | 担任总督的城镇 |
| `OwnedAlleys` | `public List<Alley> OwnedAlleys { get; private set; }` | 名下的街区 |
| `OwnedCaravans` | `public List<CaravanPartyComponent> OwnedCaravans { get; private set; }` | 名下的商队 |
| `OwnedWorkshops` | `public MBReadOnlyList<Workshop> OwnedWorkshops` | 名下的工坊 |
| `AddOwnedWorkshop` / `RemoveOwnedWorkshop` | `public void AddOwnedWorkshop(Workshop workshop)` / `public void RemoveOwnedWorkshop(Workshop workshop)` | 增删名下工坊 |

### 身份标签

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `Occupation` | `public Occupation Occupation { get; private set; }` | 职业（领主 / 吟游诗人 / 商人 / 工匠 …） |
| `SetNewOccupation` | `public void SetNewOccupation(Occupation occupation)` | 改职业。`Occupation` 没有 setter，必须走这个方法 |
| `IsNotable` | `public bool IsNotable` | 是否为「名人」（城镇/村庄里的次要人物） |
| `IsLord` | `public bool IsLord` | 是否为贵族 |
| `IsCommander` | `public bool IsCommander` | 是否为指挥官 |
| `IsRebel` | `public bool IsRebel` | 是否为叛军 |
| `IsSpecial` | `public bool IsSpecial` | 是否为特殊/剧情人物 |
| `IsPlayerCompanion` | `public bool IsPlayerCompanion` | 是否为玩家同伴 |
| `IsHumanPlayerCharacter` | `public bool IsHumanPlayerCharacter` | 是否是「人类玩家角色」（含同伴） |
| `IsMerchant` / `IsPreacher` / `IsHeadman` / `IsGangLeader` / `IsArtisan` | 各自 `public bool` | 名人细分类 |
| `IsRuralNotable` / `IsUrbanNotable` | 各自 `public bool` | 乡村 / 城镇名人 |
| `IsMinorFactionHero` | `public bool IsMinorFactionHero { get; set; }` | 是否为小势力领主（部落酋长） |
| `CompanionsInParty` | `public IEnumerable<Hero> CompanionsInParty` | 队伍里的同伴领主 |
| `IsNoncombatant` | `public bool IsNoncombatant` | 是否非战斗身份（不会上战场） |

### 玩家认知

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `IsKnownToPlayer` | `public bool IsKnownToPlayer` | 玩家是否知道此人 |
| `HasMet` | `public bool HasMet` | 玩家是否与此人见过面 |
| `SetHasMet` | `public void SetHasMet()` | 标记为已见面 |
| `LastMeetingTimeWithPlayer` | `public CampaignTime LastMeetingTimeWithPlayer { get; set; }` | 上次见面的游戏时间 |
| `LastExaminedLogEntryID` | `public long LastExaminedLogEntryID { get; set; }` | 玩家最后查看的日志条目 ID |
| `IsPregnant` | `public bool IsPregnant` | 是否怀孕 |

### 技能、属性、特质与天赋

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `Level` | `public int Level` | 等级。字段而非属性 |
| `GetSkillValue` | `public int GetSkillValue(SkillObject skill)` | 读技能等级。技能不存在时返回 0 |
| `SetSkillValue` | `public void SetSkillValue(SkillObject skill, int value)` | 直接写技能等级，不走经验流程 |
| `AddSkillXp` | `public void AddSkillXp(SkillObject skill, float xpAmount)` | 加技能经验，触发升级与 `HeroLevelledUp`。经验参数是 `float` |
| `ClearSkills` | `public void ClearSkills()` | 清空全部技能。读档修复用，日常不要调 |
| `CharacterAttributes` | `public IReadOnlyPropertyOwner<CharacterAttribute> CharacterAttributes` | 属性容器。只读遍历 |
| `GetAttributeValue` | `public int GetAttributeValue(CharacterAttribute charAttribute)` | 读单个属性值 |
| `ClearAttributes` | `public void ClearAttributes()` | 清空全部属性 |
| `SetTraitLevel` | `public void SetTraitLevel(TraitObject trait, int value)` | 直接写特质等级 |
| `GetTraitLevel` | `public int GetTraitLevel(TraitObject trait)` | 读特质等级 |
| `ClearTraits` | `public void ClearTraits()` | 清空全部特质 |
| `GetPerkValue` | `public bool GetPerkValue(PerkObject perk)` | 是否已解锁某天赋 |
| `ClearPerks` | `public void ClearPerks()` | 清空全部天赋 |
| `HeroDeveloper` | `public HeroDeveloper HeroDeveloper` | 领主成长规则对象（控制升级曲线与属性成长） |

### 关系、财富与影响

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `Gold` | `public int Gold` | 个人财富 |
| `ChangeHeroGold` | `public void ChangeHeroGold(int changeAmount)` | 增减财富。`changeAmount` 为负时会触发破产处理 |
| `AddInfluenceWithKingdom` | `public void AddInfluenceWithKingdom(float additionalInfluence)` | 增加对本王国的影响力 |
| `Power` | `public float Power` | 领主权重，影响征召与关系衰减 |
| `AddPower` | `public void AddPower(float value)` | 增减权重 |
| `PowerModifier` | `public float PowerModifier` | 权重修正系数 |
| `UpdatePowerModifier` | `public void UpdatePowerModifier()` | 重算 `PowerModifier` |
| `GetRelationWithPlayer` | `public float GetRelationWithPlayer()` | 与玩家的关系值（已含阵营与文化修正） |
| `GetUnmodifiedClanLeaderRelationshipWithPlayer` | `public float GetUnmodifiedClanLeaderRelationshipWithPlayer()` | 与玩家家族领袖的**未修正**关系值 |
| `GetRelation` | `public int GetRelation(Hero otherHero)` | 与另一领主的基础关系值 |
| `GetBaseHeroRelation` | `public int GetBaseHeroRelation(Hero otherHero)` | 底层关系值（不含任何加成） |
| `SetPersonalRelation` | `public void SetPersonalRelation(Hero otherHero, int value)` | 直接设置关系值，跳过正常的关系变更流程 |
| `IsEnemy` / `IsFriend` / `IsNeutral` | 各自 `public bool IsXxx(Hero otherHero)` | 关系档位判定。阈值来自游戏模型 |
| `Father` / `Mother` | `public Hero Father` / `public Hero Mother` | 父母。可能是 `Hero.Invalid` 而非 null |
| `Spouse` | `public Hero Spouse` | 配偶。未婚时是 `Hero.Invalid` |
| `ExSpouses` | `public MBReadOnlyList<Hero> ExSpouses` | 前配偶列表 |
| `Children` | `public MBList<Hero> Children` | 子女列表，**可写**。手动增删会破坏家族关系缓存 |
| `Siblings` | `public IEnumerable<Hero> Siblings` | 兄弟姐妹 |
| `Power`（补充） | 见上 | 与上文同一条，不重复列 |

### 装备

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `BattleEquipment` | `public Equipment BattleEquipment` | 战斗装备 |
| `CivilianEquipment` | `public Equipment CivilianEquipment` | 日常装备 |
| `StealthEquipment` | `public Equipment StealthEquipment` | 潜行装备 |
| `ResetEquipments` | `public void ResetEquipments()` | 三套装备全部回到模板默认值 |
| `CheckInvalidEquipmentsAndReplaceIfNeeded` | `public void CheckInvalidEquipmentsAndReplaceIfNeeded()` | 检查装备是否含已删除物品并替换。mod 删物品后必须调 |
| `CanHeroEquipmentBeChanged` | `public bool CanHeroEquipmentBeChanged()` | 当前是否允许换装。内部会触发 `CanHeroEquipmentBeChangedEvent` |

### 可行性查询（触发否决事件）

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `CanHaveRecruits` | `public bool CanHaveRecruits` | 是否可带征募兵 |
| `CanLeadParty` | `public bool CanLeadParty()` | 是否能率队。触发 `CanHeroLeadPartyEvent` |
| `CanMarry` | `public bool CanMarry()` | 是否能结婚。触发 `CanHeroMarryEvent` |
| `CanBeGovernorOrHavePartyRole` | `public bool CanBeGovernorOrHavePartyRole()` | 能否任总督或部队职务 |
| `CanDie` | `public bool CanDie(KillCharacterAction.KillCharacterActionDetail causeOfDeath)` | 是否允许以该死因死亡。触发 `CanHeroDieEvent` |
| `CanBecomePrisoner` | `public bool CanBecomePrisoner()` | 是否会被俘 |
| `CanMoveToSettlement` | `public bool CanMoveToSettlement()` | 能否进驻定居点 |
| `CanHaveCampaignIssues` | `public bool CanHaveCampaignIssues()` | 能否持有问题（issue） |

### 问题（Issue）与俘虏

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `Issue` | `public IssueBase Issue { get; private set; }` | 当前持有的问题对象；无则 null |
| `OnIssueCreatedForHero` | `public void OnIssueCreatedForHero(IssueBase issue)` | 绑定问题。正常流程由 Issue 系统调 |
| `OnIssueDeactivatedForHero` | `public void OnIssueDeactivatedForHero()` | 解绑当前问题 |
| `CaptivityStartTime` | `public CampaignTime CaptivityStartTime { get; set; }` | 被俘起始时间 |
| `Issue`（补充） | 见上 | 与上文同一条，不重复列 |

### 志愿兵与队伍容量

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `VolunteerTypes` | `public CharacterObject[] VolunteerTypes` | 志愿兵槽位，固定长度 `MaximumNumberOfVolunteers` |
| `MaximumNumberOfVolunteers` | `public const int MaximumNumberOfVolunteers = 6` | 志愿兵槽位数量常量 |
| `PreferredUpgradeFormation` | `public FormationClass PreferredUpgradeFormation { get; set; }` | 该领主偏好的升级阵型 |

### 静态入口与查询

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `MainHero` | `public static Hero MainHero` | 玩家领主。战役外为 null |
| `OneToOneConversationHero` | `public static Hero OneToOneConversationHero` | 当前一对一对话对象；无对话时为 null |
| `IsMainHeroIll` | `public static bool IsMainHeroIll` | 玩家领主是否卧床 |
| `AllAliveHeroes` | `public static MBReadOnlyList<Hero> AllAliveHeroes` | 全部在世领主。转发给 `Campaign.Current` |
| `DeadOrDisabledHeroes` | `public static MBReadOnlyList<Hero> DeadOrDisabledHeroes` | 死亡或禁用的领主 |
| `Find` | `public static Hero Find(string stringId)` | 转发给 `CampaignObjectManager.Find<Hero>(stringId)`；找不到返回 null |
| `FindFirst` | `public static Hero FindFirst(Func<Hero, bool> predicate)` | 遍历 `Campaign.Current.Characters` 找第一个满足谓词的英雄模板，返回其 `HeroObject`；无命中显式 `return null` |
| `FindAll` | `public static IEnumerable<Hero> FindAll(Func<Hero, bool> predicate)` | 谓词筛选全部 |
| `RandomValue` | `public int RandomValue { get; private set; }` | 该领主专属的确定性随机种子。同一领主每次读档后一致，用它做可复现随机 |

### 构造函数与覆写

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `Hero()` | `public Hero()` | 无参构造，给 XML 反序列化与复制场景用 |
| `Hero` | `public Hero(string stringId, CharacterObject characterObject, CampaignTime birthDay)` | 标准构造，指定标识、模板与生日 |
| `Hero` | `public Hero(string stringId, CharacterObject characterObject, CampaignTime birthDay, CampaignTime deathDay)` | 额外指定死亡日期，用于生成已故 NPC |
| `GetName` | `public override TextObject GetName()` | 返回 `Name`，覆盖基类的 `StringId` 兜底实现 |
| `Deserialize` | `public override void Deserialize(MBObjectManager objectManager, XmlNode node)` | 从 XML 读取该领主定义。必须调 `base` 否则 `IsInitialized` 不会被置位 |
| `ToString` | `public override string ToString()` | 调试用字符串表示 |

## 怎么用

### 怎么拿到它

`Hero` 有三个公开构造器：`public Hero(string stringId, CharacterObject characterObject, CampaignTime birthDay)`（`TaleWorlds.CampaignSystem/Hero.cs:1905`）、带死亡时间的重载（`:1915`）、以及 `public Hero()`（`:1927`）。mod 建新领主时必须用前两个并自己保证 `characterObject.IsHero`——因为 `Hero.MainHero` 之类的读取路径是**从 `CharacterObject` 反查**的。

mod 日常拿到的都是现成实例，走静态出口：

- `public static Hero MainHero`（`:2680`），getter 是 `CharacterObject.PlayerCharacter.HeroObject`。
- `public static MBReadOnlyList<Hero> AllAliveHeroes`（`:2660`）、`DeadOrDisabledHeroes`（`:2670`），分别是 `Campaign.Current.AliveHeroes` / `DeadOrDisabledHeroes`。
- 查询：`Find(string stringId)`（`:2645`，内部 `Campaign.Current.CampaignObjectManager.Find<Hero>`）、`FindFirst(Func<Hero,bool>)`（`:2634`）、`FindAll(...)`（`:2651`）。注意 `FindFirst` 的实现是 `Campaign.Current.Characters.FirstOrDefault(x => x.IsHero && predicate(x.HeroObject))`，找不到返回 null。
- `OneToOneConversationHero`（`:2690`）、`IsMainHeroIll`（`:2700`）、`SetHeroEncyclopediaTextAndLinks(Hero o)`（`:2331`）。

### 典型用法

```csharp
using TaleWorlds.CampaignSystem;

// 找一个符合条件的领主；找不到是 null，不是异常
Hero smith = Hero.FindFirst(h => h.IsAlive && h.IsNotable && h.HomeSettlement != null);   // Hero.cs:2634
if (smith != null)
{
    smith.ChangeHeroGold(200);           // :2869，内部有 int.MaxValue 溢出夹取；注意直接写 Gold 只会 MathF.Max(0,value) 夹到 0
    smith.AddInfluenceWithKingdom(30f);       // :2523，内部转 ChangeClanInfluenceAction.Apply(Clan, int)，注意它**截断成整数**
    float value = smith.Gold;                 // int，setter 是 MathF.Max(0, value)（:1618-1626）
    TextObject name = smith.Name;             // 委托到 HeroObject.Name
}

// 遍历活着的领主做自己的筛选
foreach (Hero h in Hero.AllAliveHeroes)      // :2660 → Campaign.Current.AliveHeroes
{
    if (h.Clan == Clan.PlayerClan && h.IsNotable) { /* ... */ }   // IsNotable 见 :1040
}

// 新建一个领主：stringId 必须全campaign 唯一
CharacterObject co = CharacterObject.CreateFrom(someTemplateCharacter);   // CharacterObject.cs:368
Hero newHero = new Hero("my_mod_hero_1", co, Campaign.Current.Today);      // :1905
```

### 最容易踩的坑

**把 `Hero.MainHero` 当成一个稳定的全局量直接缓存，或者在战役未建立时读它。** 它的 getter 是两跳：`CharacterObject.PlayerCharacter.HeroObject`（`Hero.cs:2680-2683`），而 `CharacterObject.PlayerCharacter` 内部又是 `Game.Current.PlayerTroop as CharacterObject`（`CharacterObject.cs:396-401`）。三个后果：战役没建起来时 `Game.Current` 为 null 直接空引用；玩家角色是普通 troop 而非 hero 时 `HeroObject` 为 null；以及**换局后缓存下来的 `MainHero` 指向已经销毁的战役**。每次现取，或者只把它当方法参数传递。

第二个坑是 `AddInfluenceWithKingdom(float additionalInfluence)`（`:2523-2527`）：它先抽一个 `MBRandom.RandomFloat`，然后 `ChangeClanInfluenceAction.Apply(this.Clan, (float)((int)additionalInfluence + (randomFloat < additionalInfluence - MathF.Floor(additionalInfluence) ? 1 : 0)))`——也就是**取整（带一点向上取整的随机项）后再按家族影响力入账**。传 30.7f 不会加 30.7。影响力挂在 `this.Clan` 上而不是领主身上，所以在无家族（`Clan` 为 null）的领主上调它会空引用。

## 真实示例

```csharp
public class VeteranBonus : CampaignBehaviorBase
{
    private readonly Dictionary<Hero, int> _killsByHero = new Dictionary<Hero, int>();

    public override void RegisterEvents()
    {
        CampaignEvents.DailyTickHeroEvent += OnDailyPerHero;
        CampaignEvents.HeroLevelledUp += OnLevelUp;
    }

    public override void SyncData(IDataStore dataStore)
    {
        dataStore.SyncData("killsByHero", ref _killsByHero);
    }

    private void OnLevelUp(Hero hero, bool shouldNotify)
    {
        if (hero == null || hero.Clan == null)
        {
            return;
        }

        if (hero.GetSkillValue(DefaultSkills.Leadership) >= 200)
        {
            hero.AddPower(10f);
            hero.UpdatePowerModifier();
        }
    }

    private void OnDailyPerHero(Hero hero)
    {
        if (hero == null || !hero.IsActive || hero.Clan == null)
        {
            return;
        }

        // 同家族内按战力排名，只奖励前几名
        int rank = 1;
        MBReadOnlyList<Hero> clanMembers = hero.Clan.Heroes;
        for (int i = 0; i < clanMembers.Count; i++)
        {
            Hero other = clanMembers[i];
            if (other != null && other.IsAlive && other.Power > hero.Power)
            {
                rank++;
            }
        }

        if (rank == 1)
        {
            hero.ChangeHeroGold(100);
            _killsByHero[hero] = _killsByHero.TryGetValue(hero, out int v) ? v + 1 : 1;
        }
    }
}
```

读取与判定：

```csharp
Hero lord = Hero.Find("empire_lord_1");
if (lord != null && lord.IsActive && lord.HomeSettlement != null)
{
    Settlement home = lord.HomeSettlement;
    if (home.IsUnderSiege && lord.Clan == Clan.PlayerClan)
    {
        Debug.Print("[VeteranBonus] " + lord.Name + " besieged at " + home.StringId);
    }
}
```

## 风险与边界

- **sealed 不可继承**：1.4.6 的 `Hero.cs` 没有可用的继承扩展点。自定义数据必须放 `AddEntityComponent<T>()` 或 Behavior 的 `IDataStore`。
- **`Find` / `FindFirst` 失败返回 null**（1.4.6 的 `Hero` 没有 `Invalid` 哨兵值）：拿到结果必须判空。`Find` 还要额外确认 `Campaign.Current` 非 null，否则转发本身就抛异常。
- **「未设置」在不同成员上表现不同**：`Spouse` / `Father` / `Mother` 在 XML 里缺节点时会留下 null 引用，读之前必须判空；而 `PartyBelongedTo`、`CurrentSettlement` 同样可能是 null。不要用「拿不到就是 null」的单一假设去做批量处理。
- **状态只能通过 `ChangeState` 切**：`HeroState` 没有 setter，且状态切换会连带改队伍与俘虏名册。在事件回调里对正在切换的领主再调 `ChangeState` 会重入。
- **三套布尔不是同一件事**：`IsAlive`（非死亡）、`IsActive`（在地图上）、`IsNotSpawned`（模板态）互不等价。用错一个就会把模板英雄算进「活着的领主」列表。
- **`HitPoints` 与 `IsWounded` 需同步**：直接写 `HitPoints` 到 0 不会自动置 `IsWounded`，战斗判定会不一致。要打伤用 `MakeWounded()`，要回血用 `Heal()`。
- **集合可写但不安全**：`Children` 是 `MBList<Hero>`，可以 `Add`，但家族关系缓存与 `Siblings` 不会自动更新。出生流程应该走 `OnGivenBirthEvent` 之后的官方路径。
- **`Family` 相关引用会失效**：`UnregisterObject` 之后 `OnHeroUnregisteredEvent` 触发，缓存的 `Hero` 变成僵尸对象。缓存键用 `StringId` 更安全。
- **`AllAliveHeroes` 的规模**：大地图上可能上千项。在 `DailyTickEvent` 里遍历它是 O(n)，用 `DailyTickHeroEvent` 分片。
- **`Children` / `Siblings` 是活视图**：`Siblings` 每次访问都重新计算关系，在深层循环里开销明显。
- **`RandomValue` 是存档字段**：不要改它，否则该领主相关的所有随机结果在下次读档后会变。
- **主线程假设**：所有成员只在战役主循环读写。`ChangeState`、`SetPersonalRelation` 这类会触发事件的成员尤其不能在别处调用。

## 跨版本提示

1.4.5 的参考源位于 `bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/Hero.cs`。1.4.6 的 `Hero` 在 1.4.5 基础上新增了 `PartyBelongedToAsPrisoner`、`IsPregnant`、`SpecialItems`、`Level`、`Culture`、`RandomValue` 这几组公开成员，并把 `GetSkillValue` / `GetTraitLevel` / `GetPerkValue` 等保持为方法形式而非属性。核心的 `MainHero`、`AllAliveHeroes`、`Find(stringId)`、`ChangeState`、`AddSkillXp(SkillObject, float)`、`Gold` / `ChangeHeroGold(int)`、`Clan` / `HomeSettlement` / `CurrentSettlement` 跨版本一致。

## 依赖关系

- 基类：[MBObjectBase](../../campaign-ext/MBObjectBase) — 注册、初始化与读档钩子的来源。
- 战役根：[Campaign](../Campaign) — `MainHero`、`AllAliveHeroes` 都转发给它。
- 事件源：[CampaignEvents](../CampaignEvents) — 本类的 `CanXxx()` 查询会触发这些否决事件。
- Behavior 层：[CampaignBehaviorBase](../CampaignBehaviorBase) · [IDataStore](../IDataStore) · [CampaignGameStarter](../CampaignGameStarter)。
- 定居点：[Settlement](../Settlement) — `HomeSettlement` / `CurrentSettlement` 的元素类型。
- 战斗内对应物：[Agent](../../mission/Agent) — 战场上的「那个人」。
- 父级：[campaign API 目录导览](../)

## 导航

- 同桶：[`../Clan`](../Clan) · [`../Settlement`](../Settlement) · [`../CampaignEvents`](../CampaignEvents)
- 父索引：[`../_index`](../_index)
