---
title: "Banner：旗帜数据、编码与视觉边界"
description: "v1.4.5 的旗帜值对象：解释 BannerData 列表、BannerCode、视觉缓存、Campaign 持有关系和安全更新方式。"
---
# Banner

## 元数据

- **Namespace:** `TaleWorlds.Core`
- **Module:** `TaleWorlds.Core`
- **Type:** `public class Banner`
- **Base:** 无
- **源码:** `bin/TaleWorlds.Core/TaleWorlds.Core/Banner.cs`

## 一句话职责

`Banner` 把背景和图标的 `BannerData` 组合成可序列化的旗帜编码，并在需要时为 Campaign、UI 和引擎创建视觉对象；它连接的是旗帜值、编码缓存和视觉资源，不是物品库存或 Clan/Kingdom 所有权本身，因此调用方必须同时遵守数据索引、资源初始化和持有者生命周期。

## 心智模型

`Banner` 是 Core 层的值对象，不是 `ItemObject`，也不是 Clan 或 Kingdom 本身。它内部至少以第 0 项作为背景数据，后续项作为图标；`BannerDataList` 以只读列表形式暴露这些元素。`BannerCode` 把当前列表编码成由点分隔的字符串，构造或修改列表后会缓存/失效这个字符串。`BannerVisual` 则在访问时调用 `Game.Current.CreateBannerVisual(this)` 惰性创建，并在 `Deserialize` 时清除旧视觉缓存。

Campaign 实体（例如 `Hero.ClanBanner`、Clan 或 Kingdom 的 `Banner`）持有旗帜值；`BannerCampaignBehavior` 还会把旗帜相关物品与 Hero 的 `BannerItem` 分开处理。UI/引擎侧的 `BannerTableau` 和 `BannerTextureCreator` 读取编码并创建纹理。这个分层很重要：更新旗帜数据只改变值对象，不能替代 Campaign 所有者的事件/存档语义，也不应在 Mission 或 UI 销毁后继续使用旧的视觉对象。

## 何时用，何时不用

### 适合使用

- 读取 `Clan.Banner`、`Kingdom.Banner` 或 `Hero.MainHero.ClanBanner` 供 UI、通知或纹理生成使用。
- 用 `CreateRandomBanner`、`CreateOneColoredEmptyBanner` 或合法编码构造临时旗帜。
- 通过 `ChangePrimaryColor`、`ChangeBackgroundColor`、`ChangeIconColors` 和图标增删方法更新一个旗帜值，再读取新的 `BannerCode`。

### 不适合使用

- 不要把 `Banner` 当成物品；旗帜装备是 `EquipmentElement`/`ItemObject`，旗帜图案值是另一条链。
- 不要直接改 `BannerDataList` 中元素后继续使用旧的 `BannerCode` 或旧 `BannerVisual`。直接改元素可能绕过编码失效和视觉刷新。
- 不要用 `new Banner()` 代替改变 Clan/Kingdom 的 Campaign 状态。实体归属、事件和存档必须回到拥有者的契约。
- 不要在 `Game.Current`、`BannerManager` 或 UI 层尚未初始化时调用依赖视觉/颜色表的路径。

## 依赖关系

```text
BannerManager + BannerData
             ↓
Banner ── BannerCode / BannerVisual
  ↓                 ↓
Hero / Clan /       BannerTableau / BannerTextureCreator
Kingdom             ↓
  ↓                 UI / Engine visual
Campaign save/events
```

- 上游：`BannerData` 描述 mesh、颜色、尺寸、位置、镜像和旋转；`BannerManager` 提供颜色/图标资源和合法 ID。
- 直接消费者：`Game.Current.CreateBannerVisual` 创建 `IBannerVisual`；`BannerTableau`、`BannerTextureCreator` 将它转为 UI/引擎纹理。
- Campaign 持有者：[`Hero`](../../campaign/Hero)、[`Clan`](../../campaign/Clan)、[`Kingdom`](../../campaign/Kingdom) 的旗帜属性；旗帜值和旗帜物品不要混为一谈。
- 相关 UI：`BannerViewModel` 负责编辑器绑定；[`ViewModel`](../ViewModel) 和 [`GauntletLayer`](../../engine/GauntletLayer) 管 UI 生命周期，不负责替代 Campaign 保存。

## 关键成员与时机

| 成员 | 用途 | 时机与副作用 |
|---|---|---|
| `BannerDataList` | 读取背景和图标数据的只读列表视图。索引 0 是背景，索引 1 起是图标。 | 列表容器只读不等于元素不可变；直接改元素可能留下过期编码。读取前确认数量，背景/图标索引不可混用。 |
| `BannerCode` / `Serialize()` | 将当前 `BannerData` 列表编码为稳定字符串。 | `BannerCode` 会缓存结果；提供的修改方法会清除缓存。把编码用于存档/网络前先完成所有修改。 |
| `Deserialize(string)` | 清空旧数据、解析编码、写入新列表，并清除 `BannerVisual`。 | 空字符串或非法编码可能得到空列表；解析后不要假定背景和第一个图标一定存在。 |
| `BannerVisual` / `SetBannerVisual` | 惰性创建或替换 `IBannerVisual`。 | 首次访问依赖 `Game.Current` 和引擎视觉工厂；跨 UI/Mission 生命周期保存引用会产生过期 native 资源。 |
| `GetPrimaryColor()`、`GetSecondaryColor()`、`GetFirstIconColor()` | 通过 `BannerManager` 把颜色 ID 转为颜色值。 | 空数据返回 `uint.MaxValue`；不能用它们代替对 `BannerDataList` 数量的检查。 |
| `ChangePrimaryColor(uint)`、`ChangeBackgroundColor(uint,uint)`、`ChangeIconColors(uint)` | 把颜色值映射成有效颜色 ID并清除编码缓存。 | 只有 `BannerManager` 能解析的颜色才会更新；失败时旗帜保持原值。 |
| `AddIconData`、`RemoveIconDataAtIndex`、`ClearAllIcons` | 修改图标集合；背景项保留在索引 0。 | 最多保留背景加 32 个图标；索引 0 不能当图标删除。修改后应重新读取编码并刷新消费者。 |
| `CreateRandomBanner()`、`CreateRandomClanBanner(int)` | 通过 `BannerManager` 生成合法的随机布局。 | 依赖 `Game.Current`/资源表；带 seed 的 Clan 版本适合可重复测试，仍不是 Campaign 所有权变更。 |
| `IsValidBannerCode`、`TryGetBannerDataFromCode` | 验证或解析外部编码。 | 编码按固定字段组解析；验证通过也只说明数据可解析，不代表当前资源或视觉上下文已准备好。 |

## 真实获取与更新路径

### 读取 Campaign 旗帜

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.Core;

Hero mainHero = Hero.MainHero;
Banner clanBanner = mainHero.ClanBanner;
if (clanBanner != null && Banner.IsValidBannerCode(clanBanner.BannerCode))
{
    string codeForUi = clanBanner.BannerCode;
    int iconCount = clanBanner.GetBannerDataListCount() - 1;
}
```

`Hero.MainHero.ClanBanner` 是真实 Campaign 获取路径。读取 Clan 或 Kingdom 的旗帜时同样先取得实体，再在实体仍处于有效 Campaign 生命周期时使用其 `Banner` 属性。

### 构造、校验并序列化临时旗帜

```csharp
using TaleWorlds.Core;

Banner candidate = Banner.CreateOneColoredBannerWithOneIcon(0xFF202020u, 0xFFFFFFFFu, -1);
string candidateCode = candidate.Serialize();
if (Banner.IsValidBannerCode(candidateCode))
{
    Banner copy = new Banner(candidateCode);
    uint primaryColor = copy.GetPrimaryColor();
}
```

这条路径只创建值对象。要让旗帜成为某个 Clan/Kingdom 的 Campaign 状态，必须找到该实体实际提供的赋值/事件路径，并在合适的战役阶段保存；不要把临时副本直接当作全局对象替换。

## 风险与边界

- **索引边界：** `GetPrimaryColorId` 等方法直接访问背景或第一图标。空列表、缺少图标或负索引会导致异常或无意义的颜色结果；先检查 `GetBannerDataListCount()`。
- **编码缓存：** `BannerCode` 是缓存字段。直接修改 `BannerData` 元素不会自动等同于调用 Banner 的失效路径，可能让存档/网络字符串与画面数据不同步。
- **视觉寿命：** `BannerVisual` 依赖 `Game.Current`，并且由 `BannerTableau`/`BannerTextureCreator` 等消费者使用。UI/Mission 销毁时要释放消费者，不要把 `IBannerVisual` 跨场景长期保存。
- **资源合法性：** 最大图标数是 32；mesh、颜色和编码字段必须由 `BannerManager` 支持。非法编码可以被拒绝或解析为空列表。
- **归属与存档：** 修改 `Banner` 副本不会触发 Hero、Clan 或 Kingdom 的 Campaign 事件，也不会自动改变旗帜物品。需要持久化的修改必须沿拥有者和存档系统的生命周期完成。
- **线程/阶段：** UI 视觉创建、`Game.Current` 和资源表都属于游戏生命周期约束；不要从任意后台线程访问或在模块尚未完成初始化时构造依赖视觉的对象。

## 版本说明

本页以 v1.4.5 `Banner.cs`、`BannerData.cs` 和调用点为准。跨版本使用编码时应通过 `IsValidBannerCode`/`TryGetBannerDataFromCode` 检查，并重新确认资源 ID、最大图标规则和 Campaign 旗帜归属流程。

## 导航

- [↑ Core Extra 父级](../)
- [↔ ItemObject](../ItemObject)
- [↔ Equipment](../Equipment)
- [↔ SkillObject](../SkillObject)
- [↔ Campaign：Hero](../../campaign/Hero)
- [↔ Campaign：Clan](../../campaign/Clan)
- [相关：ViewModel](../ViewModel)
- [相关：GauntletLayer](../../engine/GauntletLayer)
