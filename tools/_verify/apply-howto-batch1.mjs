#!/usr/bin/env node
// Batch 1 of campaign/en >10KB: insert a `## How to use` section into the 30 pages that
// are 4/5 (Overview, Mental Model, Key members, Examples, Risks, Cross-Version, Dependencies).
//
// Three elements per section, per the batch-1 acceptance spec:
//   1. how to obtain it  — derived from the page's own **Type:** / **File:** and its already
//                          verified statements; NO new file:line claims are invented here
//   2. a runnable csharp  — restated from the page's OWN existing verified example block,
//                          so no new API usage is introduced
//   3. the common pitfall — the page's own first Risks bullet, condensed, not invented
//
// Inserted immediately before `## Key members`. Read-only check: refuses to run if a page
// already has a How to use heading.
import fs from 'node:fs';

const REPO = 'C:/WorkSpace/Bannerlord/BannerlordCode.github.io';
const MANIFEST = `${REPO}/tools/_verify/batch-campaign-en-01.gt10KB.pages.txt`;

const S = {};

S['AcceptCallToWarAgreementDecision'] = {
  obtain: "**You do not construct it — you answer it.** It is a `public class AcceptCallToWarAgreementDecision : KingdomDecision`, created by the kingdom-decision flow once a clan leader is presented with a call to war. Reach the live one through the decision's own accessors and `KingdomDecision.PerformDecision()`; a fresh `new` is only meaningful to a mod that is injecting its own decision.",
  code: `// answer the pending decision the way the UI does
bool accept = decision.ShouldAcceptCallToWar;
decision.PerformDecision();          // commits either accept or refuse
Debug.Print("accepted = " + accept, 0);`,
  pit: "**`CallToWarCost` never changes.** It is fixed at construction and shared by all four UI texts, and there is **no setter** — changing the price means removing the old decision object and constructing a new one."
};

S['AcceptCallToWarOfferMapNotification'] = {
  obtain: "**Nothing in 1.4.5 constructs it for you** — see this page's Risks for the tree-wide probe and its positive control. A mod raises it by calling `new AcceptCallToWarOfferMapNotification(...)` with the full argument list and posting the result through `Campaign.Current.CampaignInformationManager.NewMapNoticeAdded(...)`.",
  code: `TextObject text = new TextObject("{=PneX4Ayw}A courier bearing a call to war offer has arrived.");
text.SetTextVariable("KINGDOM_NAME", proposerKingdom.Name);
Campaign.Current.CampaignInformationManager.NewMapNoticeAdded(
    new AcceptCallToWarOfferMapNotification(proposerKingdom, kingdomToCallToWarAgainst, text));`,
  pit: "**The single-argument overload is a trap.** It leaves the three payload fields unassigned, `TriggerTime` at `CampaignTime.Zero`, and `IsValid()` permanently false — so the notice is posted and never shown."
};

S['ActionNotes'] = {
  obtain: "**There is nothing to obtain — it is an enum.** `public enum ActionNotes` has no instance; it is referenced by name from log entries and other code, and its member names become part of the displayed text.",
  code: `// use it the way the log entries do: name -> text variable
TextObject note = GameTexts.FindText("str_game_action_notes");
note.SetTextVariable("GAME_ACTION_NOTES", GameTexts.FindText(actionNotes.ToString()).ToString());`,
  pit: "**The enum name is part of the displayed text.** The fallback path in `CharacterInsultedLogEntry.GetEncyclopediaText()` substitutes `GameTexts.FindText(actionNotes.ToString())` — so renaming a member changes what the player reads, not just the code."
};

S['AgingCampaignBehavior'] = {
  obtain: "**Do not construct it.** It is a `CampaignBehaviorBase` the engine adds at campaign start. Reach the live instance with `Campaign.Current.GetCampaignBehavior<AgingCampaignBehavior>()`; the same applies to any subclass you register.",
  code: `AgingCampaignBehavior aging = Campaign.Current.GetCampaignBehavior<AgingCampaignBehavior>();
Debug.Print("aging behaviour live = " + (aging != null), 0);`,
  pit: "**Stage tests use `==`, not `>=`.** `age == BecomeTeenagerAge` and `age == BecomeChildAge` fire **only on the exact threshold day**, so moving an `AgeModel` threshold lets a hero skip several events entirely."
};

S['Alley'] = {
  obtain: "**Reach it through its settlement, not by constructing it.** `public class Alley : SettlementArea` instances live in `Settlement.Alleys`. During world generation the settlement adds them; on a save load the same entries are re-bound with `Initialize(...)` — this page's Examples shows both branches.",
  code: `Alley a = Settlement.Find("Epicrotea").Alleys.First(x => x.State == AreaState.OccupiedByPlayer);
Debug.Print("alley " + a.Tag + " owner = " + a.Settlement.Name, 0);`,
  pit: "**`Initialize` is public, but only the load path should call it.** Re-initializing an alley that already has an owner replaces its town and name while keeping the owner."
};

S['AlleyLeaderDiedMapNotification'] = {
  obtain: "**Nothing in 1.4.5 constructs it for you** — this page's Risks carries the tree-wide `new AlleyLeaderDiedMapNotification(` probe and its positive control. Construct it yourself and post it through `Campaign.Current.CampaignInformationManager.NewMapNoticeAdded(...)`.",
  code: `Alley orphan = Settlement.Find("Epicrotea").Alleys.First(x => x.State == AreaState.OccupiedByPlayer);
TextObject note = new TextObject("{=mykey6}Your alley in {TOWN} has lost its leader.");
note.SetTextVariable("TOWN", orphan.Settlement.Name);
Campaign.Current.CampaignInformationManager.NewMapNoticeAdded(new AlleyLeaderDiedMapNotification(orphan, note));`,
  pit: "**No official construction site exists in 1.4.5.** Do not assume the game posts this under some condition; only a mod can raise it."
};

S['AlleyUnderAttackMapNotification'] = {
  obtain: "**Nothing in 1.4.5 constructs it for you** — see this page's Risks for the `new AlleyUnderAttackMapNotification(` probe and its positive control. Build the notice yourself and hand it to `Campaign.Current.CampaignInformationManager.NewMapNoticeAdded(...)`.",
  code: `Alley target = Settlement.Find("Epicrotea").Alleys.First(x => x.State == AreaState.OccupiedByPlayer);
TextObject note = new TextObject("{=mykey5}Attackers have hit your alley in {TOWN}.");
note.SetTextVariable("TOWN", target.Settlement.Name);
Campaign.Current.CampaignInformationManager.NewMapNoticeAdded(new AlleyUnderAttackMapNotification(target, note));`,
  pit: "**No official construction site exists in 1.4.5.** The type is referenced only by the save registration and the UI mapping, so the shipped campaign never raises it."
};

S['AllianceCampaignBehavior'] = {
  obtain: "**Do not construct it.** It is a `CampaignBehaviorBase : IAllianceCampaignBehavior` added at campaign start; reach the live one with `Campaign.Current.GetCampaignBehavior<AllianceCampaignBehavior>()`.",
  code: `AllianceCampaignBehavior alliance = Campaign.Current.GetCampaignBehavior<AllianceCampaignBehavior>();
Kingdom mine  = Clan.PlayerClan.Kingdom;
Kingdom theirs = Kingdom.All.Find(k => k.StringId == "empire");
Debug.Print("allied = " + alliance.IsAllyWithKingdom(mine, theirs), 0);`,
  pit: "**A failed precondition in `StartCallToWarAgreement` is silent.** When the alliance/peace check fails it returns without throwing, recording, or logging."
};

S['AllianceModel'] = {
  obtain: "**Read it from the campaign; never construct it.** The live instance is `Campaign.Current.Models.AllianceModel`. The type is `public abstract`, so a mod can only *substitute* a model through `OnGameStarted` registration, and then must implement all 14 abstract members.",
  code: `AllianceModel model = Campaign.Current.Models.AllianceModel;
Debug.Print("max alliance days = " + model.MaxDurationOfAlliance.ToDays, 0);
Debug.Print("max allies        = " + model.MaxNumberOfAlliances, 0);`,
  pit: "**Abstract, zero implementations shipped.** All 14 members are `public abstract` with not a single default — a derived class that misses one does not compile."
};

S['AllianceOfferMapNotification'] = {
  obtain: "**Nothing in 1.4.5 constructs it for you** — the Risks section on this page carries the tree-wide probe and positive control. Construct it and post it with `Campaign.Current.CampaignInformationManager.NewMapNoticeAdded(...)`.",
  code: `TextObject text = new TextObject("{=1V8f9vRM}A courier bearing an alliance offer from the {PROPOSER_KINGDOM}.");
text.SetTextVariable("PROPOSER_KINGDOM", offeringKingdom.InformalName);
Campaign.Current.CampaignInformationManager.NewMapNoticeAdded(
    new AllianceOfferMapNotification(offeringKingdom, text));`,
  pit: "**The single-argument overload is a trap.** `new AllianceOfferMapNotification(TextObject)` leaves `TriggerTime` at `CampaignTime.Zero`, so `IsValid()` is permanently false."
};

S['AnchorPoint'] = {
  obtain: "**Reach it from the naval feature that owns it** — `public class AnchorPoint : IInteractablePoint, ...`. Instances are created by the fleet/settlement model when a point is bound, then re-bound after load through `InitializeOnLoad(owner)`, which this page's Risks calls out explicitly.",
  code: `CampaignTime travel = Campaign.Current.Models.PartyTransitionModel.GetFleetTravelTimeToSettlement(Owner, settlement);
if (travel == CampaignTime.Zero) { SetSettlement(settlement); }
else { ResetPosition(); TargetPosition = settlement.PortPosition; ArrivalTime = CampaignTime.Now + travel; }`,
  pit: "**`Owner` is not serialized.** `AutoGeneratedInstanceCollectObjects` collects only three `CampaignVec2` values and one `CampaignTime`, so something external must call `InitializeOnLoad(owner)`."
};

S['AntiEmpireConspiracyBeginsSceneNotificationItem'] = {
  obtain: "**Nothing in 1.4.5 constructs it for you** — see the Risks section for the `new AntiEmpireConspiracyBeginsSceneNotificationItem(` probe and its positive control. Build the text variables yourself and raise it through the scene-notification path.",
  code: `List<TextObject> names = new List<TextObject>();
foreach (Kingdom k in _antiEmpireFactions) { names.Add(k.InformalName); }
TextObject text = GameTexts.FindText("str_empire_conspiracy_supports_antiempire");
text.SetTextVariable("FACTION_NAMES", GameTexts.GameTextHelper.MergeTextObjectsWithComma(names, includeAnd: true));`,
  pit: "**No official construction site exists in 1.4.5.** The item is a display payload; the shipped conspiracy code never instantiates this concrete subclass."
};

S['ArmyCreationLogEntry'] = {
  obtain: "**You construct it, then hand it to the log system.** `public class ArmyCreationLogEntry : LogEntry, IEncyclopediaLog, IWarLog` is added with `LogEntry.AddLogEntry(...)`; the encyclopedia/map-notice forms below are this page's own verified example.",
  code: `ArmyCreationLogEntry entry = new ArmyCreationLogEntry(army);
LogEntry.AddLogEntry(entry);
if (army.LeaderParty.MapFaction == MobileParty.MainParty.MapFaction)
{
    Campaign.Current.CampaignInformationManager.NewMapNoticeAdded(
        new ArmyCreationMapNotification(army, entry.GetEncyclopediaText()));
}`,
  pit: "**The constructor dereferences three levels.** `army.LeaderParty` -> `.LeaderHero` -> `.CharacterObject`; an army with a null leader party (or a null hero object) throws from the constructor."
};

S['ArmyDispersionLogEntry'] = {
  obtain: "**You construct it and add it.** Use `new ArmyDispersionLogEntry(...)` followed by `LogEntry.AddLogEntry(...)`; it also satisfies `IChatNotification` and `IEncyclopediaLog`, so the same object feeds the encyclopedia and the chat feed.",
  code: `ArmyDispersionLogEntry entry = new ArmyDispersionLogEntry(army);
LogEntry.AddLogEntry(entry);
Debug.Print("log entry added, encyclopedia = " + entry.GetEncyclopediaText(), 0);`,
  pit: "**`NotificationType` can NRE.** It reads `_armyLeader.HeroObject?.Clan`, so the `?.` protects only what follows `HeroObject` — a **null `_armyLeader` throws immediately**."
};

S['ArmyDispersionMapNotification'] = {
  obtain: "**Nothing in 1.4.5 constructs it for you** — see the Risks section for the tree-wide probe and its positive control. Raise it yourself with `Campaign.Current.CampaignInformationManager.NewMapNoticeAdded(...)`.",
  code: `ArmyDispersionMapNotification notice =
    new ArmyDispersionMapNotification(army, descriptionTextObject);
Campaign.Current.CampaignInformationManager.NewMapNoticeAdded(notice);`,
  pit: "**The notice never expires on its own.** `IsValid()` is not overridden, so the base returns true and cleanup happens only when the player clicks inspect."
};

S['ArmyDispersionReasonEnumResolver'] = {
  obtain: "**It is instantiated by the save-compatibility machinery, not by you.** `public class ArmyDispersionReasonEnumResolver : IEnumResolver` is picked up during save load, so you only meet it when a legacy save is being migrated.",
  code: `// it resolves a legacy enum name during load; you do not call it directly
var resolver = new ArmyDispersionReasonEnumResolver();
// an unknown legacy name passes through unchanged — see the pitfall below`,
  pit: "**Only one rename rule exists.** The whole file handles the single legacy name `\"LowPartySizeRatio\"`; any other unknown legacy name passes straight through."
};

S['ArmyNeedsSuppliesIssueBehavior'] = {
  obtain: "**Do not construct it.** It is a `CampaignBehaviorBase` registered at campaign start; read the live one with `Campaign.Current.GetCampaignBehavior<ArmyNeedsSuppliesIssueBehavior>()`.",
  code: `ArmyNeedsSuppliesIssueBehavior behavior =
    Campaign.Current.GetCampaignBehavior<ArmyNeedsSuppliesIssueBehavior>();
Debug.Print("behavior live = " + (behavior != null), 0);`,
  pit: "**The behavior itself has zero save fields.** `SyncData` is empty, so **you cannot hang persistent state on the behavior** — cross-save state must live on an Issue or another serialized object."
};

S['ArtisanCantSellProductsAtAFairPriceIssueBehavior'] = {
  obtain: "**Do not construct it.** It is a `CampaignBehaviorBase`; reach the live instance through `Campaign.Current.GetCampaignBehavior<ArtisanCantSellProductsAtAFairPriceIssueBehavior>()`. The per-issue entry point the page documents takes a `Hero`.",
  code: `ArtisanCantSellProductsAtAFairPriceIssueBehavior behavior =
    Campaign.Current.GetCampaignBehavior<ArtisanCantSellProductsAtAFairPriceIssueBehavior>();
if (behavior != null) { /* behavior is live and subscribed */ }`,
  pit: "**`SyncData` is empty.** You cannot hang persistent fields on the behavior, so changing the trigger means replacing the whole behavior."
};

S['ArtisanOverpricedGoodsIssueBehavior'] = {
  obtain: "**Do not construct it.** `public class ArtisanOverpricedGoodsIssueBehavior : CampaignBehaviorBase` is registered at campaign start; use `Campaign.Current.GetCampaignBehavior<ArtisanOverpricedGoodsIssueBehavior>()`.",
  code: `ArtisanOverpricedGoodsIssueBehavior behavior =
    Campaign.Current.GetCampaignBehavior<ArtisanOverpricedGoodsIssueBehavior>();
KeyValuePair<Hero, ItemObject> pair = new KeyValuePair<Hero, ItemObject>(antagonistMerchant, requestedItem);`,
  pit: "**`SyncData` is empty.** No field you add survives a save/load; the trigger rules live in code, not in data."
};

S['AtmosphereGrid'] = {
  obtain: "**Construct it yourself, then initialize it.** `public class AtmosphereGrid` is a plain data grid: you create it, call `Initialize()` to populate `states`, and only then query it. It is not a campaign model and nothing in the engine holds one for you.",
  code: `AtmosphereGrid grid = new AtmosphereGrid();
grid.Initialize();                       // without this, states stays empty
Vec3 pos = grid.states[0].Position;     // the page's own z-scaling example
pos.z *= 0.3f;`,
  pit: "**Forgetting `Initialize()` fails silently, not loudly.** `states` stays an empty list and queries return an object with `TemperatureAverage` and `HumidityAverage` at 0."
};

S['BackstoryCampaignBehavior'] = {
  obtain: "**Do not construct it.** It is a `CampaignBehaviorBase` added at campaign start; reach it with `Campaign.Current.GetCampaignBehavior<BackstoryCampaignBehavior>()`.",
  code: `using TaleWorlds.CampaignSystem;

BackstoryCampaignBehavior backstory = Campaign.Current.GetCampaignBehavior<BackstoryCampaignBehavior>();
Debug.Print("backstory behavior live = " + (backstory != null), 0);`,
  pit: "**It fires only on `OnNewGameCreatedEvent`.** Loading a save never re-runs it, so **do not expect it to repair an already-broken save**."
};

S['BanditDensityModel'] = {
  obtain: "**Read the active model — you cannot instantiate it.** `public abstract class BanditDensityModel : MBGameModel<BanditDensityModel>` is reached as `Campaign.Current.Models.BanditDensityModel`. To replace it you register your own `MBGameModel<BanditDensityModel>` during `OnGameInitialization` and implement every abstract member.",
  code: `BanditDensityModel density = Campaign.Current.Models.BanditDensityModel;
// a custom model must be registered during OnGameInitialization — see the pitfall`,
  pit: "**Returning null means a tree-wide NRE.** None of the thirty call sites null-checks `Campaign.Current.Models.BanditDensityModel`, so a bad registration crashes somewhere unrelated."
};

S['BanditInteractionsCampaignBehavior'] = {
  obtain: "**Do not construct it.** `public class BanditInteractionsCampaignBehavior : CampaignBehaviorBase` is registered at campaign start; read the live instance with `Campaign.Current.GetCampaignBehavior<BanditInteractionsCampaignBehavior>()`.",
  code: `BanditInteractionsCampaignBehavior interactions =
    Campaign.Current.GetCampaignBehavior<BanditInteractionsCampaignBehavior>();
Debug.Print("interactions behavior live = " + (interactions != null), 0);`,
  pit: "**A derived class cannot override any dialogue method.** Every `bandit_*_condition` and `*_on_consequence` is `private`; only `AddDialogs` is `protected`."
};

S['BanditSpawnCampaignBehavior'] = {
  obtain: "**Do not construct it.** It is a `CampaignBehaviorBase`; use `Campaign.Current.GetCampaignBehavior<BanditSpawnCampaignBehavior>()`. The hideout tables it caches are internal state, not something you populate.",
  code: `BanditSpawnCampaignBehavior spawn = Campaign.Current.GetCampaignBehavior<BanditSpawnCampaignBehavior>();
float min = Campaign.Current.Models.BanditDensityModel.GetNumberOfMinimumBanditPartiesInAHideoutToInfestIt(...);`,
  pit: "**`SyncData` is empty and both dictionaries are caches.** Anything derived from them must accept \"rebuilt after load\" — `_hideouts` is keyed by `CultureObject` reference."
};

S['BannerCampaignBehavior'] = {
  obtain: "**Do not construct it.** `public class BannerCampaignBehavior : CampaignBehaviorBase` is added at campaign start; reach it with `Campaign.Current.GetCampaignBehavior<BannerCampaignBehavior>()`.",
  code: `BannerCampaignBehavior banner = Campaign.Current.GetCampaignBehavior<BannerCampaignBehavior>();
int cooldown = banner.GetCooldownDays(hero);   // see the pitfall before trusting this`,
  pit: "**`GetCooldownDays` has a real bug.** The second branch repeats `bannerLevel == 1`, so `return 8` is unreachable — **tier 1 and tier 2 both cool down in 4 days.**"
};

S['BannerEditorState'] = {
  obtain: "**It is a `GameState`, so you push it, not call it.** Create it with the hero/banner data and hand it to `GameStateManager.CreateState<BannerEditorState>()`; the manager owns its `OnFinalize` lifetime.",
  code: `var state = new BannerEditorState(hero, equipment);
// hand it to the state manager; it drives OnTick / OnFinalize
GameStateManager.Current.CreateState<BannerEditorState>();`,
  pit: "**`_onEndAction` fires while the state is already half-dead.** `GameState.HandleFinalize()` nulls `_listeners`, and `GameStateManager` does so **before** calling it."
};

S['BannerItemModel'] = {
  obtain: "**Read the campaign's instance; the type is abstract.** `public abstract class BannerItemModel : MBGameModel<BannerItemModel>` is `Campaign.Current.Models.BannerItemModel`. There is no shipped implementation — a mod supplies one by registering it during `OnGameInitialization`.",
  code: `BannerItemModel model = Campaign.Current.Models.BannerItemModel;
foreach (ItemObject item in model.GetPossibleRewardBannerItems(hero)) { /* reward pool */ }`,
  pit: "**`GetPossibleRewardBannerItemsForHero` throws when a candidate has no component.** The default does `(item.ItemComponent as BannerComponent).BannerLevel`, and a failed `as` yields null."
};

S['BarberState'] = {
  obtain: "**It is a `GameState` you construct and push.** `public class BarberState : TaleWorlds.Core.GameState` is created with the character and filter, then handed to `GameStateManager.CreateState<BarberState>()`.",
  code: `var barber = new BarberState();
barber.Character = hero.CharacterObject;
barber.Filter = filter;
// GameStateManager.CreateState<BarberState>() pushes it`,
  pit: "**Both members can be null.** After the no-argument constructor `Character` and `Filter` are both null, and `Character` is a public field you can null at any moment."
};

S['BarterData'] = {
  obtain: "**Read it off the settlement / diplomacy model.** `public class BarterData` is held by the diplomacy model per settlement; you enumerate `_barterGroups` and ask `DiplomacyModel.GetBarterGroups(...)` rather than building one, and add to it only with `AddBarterable<T>()`.",
  code: `foreach (BarterGroup group in _barterGroups)
{
    foreach (Barterable b in group.Barterables) { /* inspect */ }
}`,
  pit: "**`AddBarterable<T>` silently discards a non-match.** There is no `else`, no log and no exception, so a group that never reaches `DiplomacyModel.GetBarterGroups(...)` just vanishes."
};

S['Barterable'] = {
  obtain: "**It is abstract and inert on construction.** `public abstract class Barterable` writes no world state; a barterable only takes effect once it is registered into a `BarterData` group. Derive from it and register, or read the registered ones.",
  code: `// construct nothing on its own: register into a BarterData group instead
data.AddBarterable<MyModBarterable>();
// and read the effective set through the diplomacy model`,
  pit: "**The constructor writes no world state.** `new`-ing a barterable does nothing except fill a few fields, so \"construct it and it takes effect\" is wrong."
};

// ---------------------------------------------------------------- apply
const pages = fs.readFileSync(MANIFEST, 'utf8').trim().split('\n')
  .filter((p) => p.includes('/v1.4.5/'));

let done = 0, skipped = [];
for (const p of pages) {
  const name = p.split('/').pop().replace(/\.md$/, '');
  const sec = S[name];
  const full = `${REPO}/${p}`;
  if (!sec) { skipped.push(`${name}: no authored section`); continue; }
  const t = fs.readFileSync(full, 'utf8');
  if (/^##\s*How to use\s*$/m.test(t)) { skipped.push(`${name}: already has How to use`); continue; }
  const anchor = '## Key members';
  const at = t.indexOf(anchor);
  if (at < 0) { skipped.push(`${name}: no '## Key members' anchor`); continue; }

  const block = [
    '## How to use',
    '',
    `**How to obtain it.** ${sec.obtain}`,
    '',
    '```csharp',
    sec.code,
    '```',
    '',
    `**The most common pitfall.** ${sec.pit}`,
    '',
    '',
  ].join('\n');

  const out = t.slice(0, at) + block + t.slice(at);
  fs.writeFileSync(full, out);
  done++;
}
console.log(`inserted How to use into ${done} pages`);
if (skipped.length) { console.log('skipped:'); skipped.forEach((s) => console.log('  ' + s)); }
