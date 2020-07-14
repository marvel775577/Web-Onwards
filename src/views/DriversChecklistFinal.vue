<template>
  <div class="wrap">
    <div class="drivers-checklist-form-final">
      <div class="left">
        <div class="book">
          <div class="left-side">
            <div class="header-content">
              <div class="icon">
                <i class="fas fa-wrench"></i>
              </div>
              <h1>Driver's Checklist - Detail</h1>
            </div>
            <div class="content">
              <h2>List of Contents</h2>
              <ol>
                <li>DVLA options</li>
                <li>Voluntarily license surrender</li>
                <li>Reducing risks</li>
              </ol>
            </div>
            <div class="control">
              <button>Print/PDF</button>
              <button>Save</button>
              <button class="dark">Back to Overview</button>
            </div>
          </div>
          <div class="right-side">
            <div class="content">
             {{ article }}
            </div>
          </div>
        </div>
        <div class="bottom">
          <div class="card">
            <p class="body">Our free tools have already helped so many people.</p>
            <div class="control">
              <h1>Why not try them today ?</h1>
              <i class="fas fa-arrow-right desktop-icon"></i>
              <i class="fas fa-arrow-right mobile-icon"></i>
            </div>
          </div>
          <small-configure-thumb
            title="Cost Calculator"
            body="Helps you calculate what you spend on your vehicle and how to save money using alternative transport."
            color="#3ca4f4"
          />
          <small-configure-thumb
            title="Journey Planner"
            body="Allows you to plan your journeys si that you can easily find your way without needing a car."
            color="#ff8e33"
          />
        </div>
      </div>
      <div class="right">
        <div>
          <small-banner
            title='<span class="bold">Tip:</span> To jump to a specific section, click the headline on the left.'
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SmallConfigureThumb from '@/components/SmallConfigureThumb'
import SmallBanner from '@/components/SmallBanner'

export default {
  components: {
    SmallConfigureThumb,
    SmallBanner
  },
  data () {
    return {
      articles: [
        {
          title: '1 - TELL THE DVLA',
          body: 'OVERVIEW:\n' +
            'In the UK, the law on driving and dementia is very clear: if you are a license holder, you must contact and inform the DVLA promptly once you\n' +
            'have been diagnosed with dementia. You could be fined up to £1000 if you don’t tell the DVLA and could be prosecuted if you have an accident.\n' +
            'FULL:\n' +
            'In the UK, the law on driving and dementia is very clear. A licence holder must contact the relevant licensing agency about a condition that might\n' +
            'affect their ability to drive, dementia included. In Scotland, the agency you must inform is the Driver and Vehicle Licensing Agency (DVLA). You\n' +
            'could be fined up to £1000 if you don’t tell the DVLA and could also be prosecuted if you have an accident.\n' +
            'To inform the DVLA, complete the appropriate form and send to:\n' +
            'Drivers Medical Group, DVLA, Swansea, SA99 1DF'
        },
        {
          title: '2 - DVLA FORMS',
          body: 'OVERVIEW:\n' +
            'The majority of people will use a CG1 form to inform the DVLA. However, those with lewy body dementia will use a B1 form. Both forms ask for\n' +
            'personal information and GP/specialist details. It will also ask you to sign a declaration giving the DVLA authority to access your medical details.\n' +
            '- CG1 Link: https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/709734/cg1-medical-\n' +
            'questionnaire.pdf\n' +
            '- B1 Link - https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/709730/b1-medical-questionnaire.\n' +
            'pdf\n' +
            'FULL:\n' +
            'The majority of people diagnosed with dementia will use a CG1 form to inform the DVLA. However, individuals diagnosed with Lewy body\n' +
            'dementia will use a B1 form. The forms will ask for your personal information and GP and/or specialist details. It is helpful to have these details to\n' +
            'hand before you begin. If you need accessible format forms, these are available by request.\n' +
            'Please be aware that the form includes a declaration which, when complete, will give the DVLA authority to contact your GP and/or specialist. It\n' +
            'allows them to release any information deemed necessary.\n' +
            'Once they have received your form, the DVLA will review your case and decide if you can continue to drive. According to the Alzheimer Society, 1\n' +
            'in 3 people with dementia are still driving. Whilst you await a decision, you should follow your doctors guidance on whether to drive or not.'
        },
        {
          title: '3 - TELLING INSURER',
          body: 'OVERVIEW:\n' +
            'If you have been diagnosed with dementia, it is important to tell your car insurance provider about your diagnosis immediately. This it to ensure\n' +
            'your insurance continues to be valid as it is a criminal offence to drive without at least third-party cover.\n' +
            'FULL:\n' +
            'If you have been diagnosed with dementia, it is important to tell your car insurance provider about your diagnosis immediately. This is to ensure\n' +
            'you remain covered and that your insurance continues to be valid. If you do not tell your provider, there is a chance that your insurance could\n' +
            'become invalid and any claim would be rejected. Please note that it is a criminal offence to drive without at least third-party cover.\n' +
            'Whilst different insurance providers have different policies, the majority will continue to cover you if the DVLA have said you are safe to drive.\n' +
            'Some providers ask you to sign a confirmation that you have informed the DVLA.'
        },
        {
          title: '4 - VOLUNTARILY LICENCE SURRENDER',
          body: 'OVERVIEW:\n' +
            'Being diagnosed with dementia doesn’t necessarily mean you will be told to stop driving. However, any people choose to give up voluntarily\n' +
            'because they find it stressful or lose confidence in their driving abilities. If you choose to do stop driving, you can surrender your licence by\n' +
            'completing the DVLA form and returning your licence.\n' +
            '- Declaration of Surrender for Medical Reasons - Form link - https://assets.publishing.service.gov.uk/government/uploads/system/uploads/\n' +
            'attachment_data/file/275454/ODL.pdf\n' +
            'FULL:\n' +
            'Being diagnosed with dementia doesn’t necessarily mean you have to give up driving. However, many people with dementia choose to drive up\n' +
            'driving voluntarily. This is because they find it too stressful or if they lose confidence in their driving abilities.\n' +
            'Sometimes it becomes clear that you should no longer be driving. This may be because you:\n' +
            '- Feel less confident or more irritable on the road\n' +
            '- Get regularly lost or confused on familiar routes\n' +
            '- Begin to misjudge speed or distance\n' +
            '- Find yourself straying across lanes or hitting kerbs\n' +
            '- Have minor scrapes, accidents or near-misses\n' +
            '- Find that passengers express concern about your driving\n' +
            'To voluntarily surrender your licence, you need to tell the DVLA via form and send them your licence. Complete the ‘Declaration of Voluntary\n' +
            'Surrender’ form. The form will ask for your personal details, medical diagnosis and includes a declaration for you to sign. Its helpful for you to\n' +
            'have this information before you begin filling in the form.\n' +
            'Once completed, send the form and your licence to:\n' +
            'Drivers Medical Group, DVLA, Swansea, SA99 1TU'
        },
        {
          title: '5 - DVLA OPTIONS',
          body: 'OVERVIEW:\n' +
            'Once you have informed the DVLA, you should hear back within 6 weeks. If its going to take longer, you will receive a letter advising you of this.\n' +
            'There are three possibilities at this stage. Whilst you await a decision, you should follow your doctors guidance on whether to drive or not.\n' +
            'FULL:\n' +
            'Once you have informed the DVLA of your dementia diagnosis, you should hear back within 6 weeks. It its going to take longer, you will receive a\n' +
            'letter advising you of this. Whilst awaiting a decision, you should follow your doctors guidance on whether to drive or not.\n' +
            'Having received note of your diagnosis, medical advisors at the DVLA will make a decision as to whether you can continue to drive. There are\n' +
            'three possibilities at this stage:\n' +
            '1) The DVLA may decide to renew your licence, usually on a short term basis. For individuals with dementia, licences are most often valid for one\n' +
            'year. For those with an early diagnosis, the licence can be valid for a maximum of three years.\n' +
            '2) Alternatively, the DVLA may choose to cancel or revoke your licence with immediate affect\n' +
            '3) In a minority of cases, the DVLA may decide that they require more information before making a decision. This can include further medical\n' +
            'details, asking you to take an eyesight test or requiring you to take a driving assessment.\n' +
            'In all cases, the DVLA will write to you to inform you of their decision. According to the Alzheimer Society, 1 in 3 people with dementia still\n' +
            'drives.'
        },
        {
          title: '6 - DRIVING ASSESSMENT',
          body: 'OVERVIEW:\n' +
            'The DVLA may ask you to take a driving assessment if they are unsure if you are safe to drive. Alternatively, you can ask your GP to refer you if\n' +
            'you have concerns about your driving abilities. The assessment takes place in Edinburgh and usually lasts about two hours.\n' +
            'FULL:\n' +
            'If the DVLA are unsure whether you are safe to drive, they may ask you to take a driving assessment. If the DVLA ask you to sit an assessment,\n' +
            'they will pay for it. Alternatively, you can ask your GP to refer you if you have concerns about your driving abilities. If you are referred by an NHS\n' +
            'GP or consultant, the cost is covered by the NHS.\n' +
            'The assessment takes place at the Scottish Driving Assessment Service (SDAS) in Edinburgh. You might have to make your own arrangements\n' +
            'to & from the centre. You should also take someone with you in case you need to be driven home. If you have been referred by an NHS doctor\n' +
            'outside the Lothian area, you can seek reimbursement of travel expenses via your Health Board. Each individual Health Board can decide how\n' +
            'they want to deal with this\n' +
            'The assessment usually takes about two hours. Unlike a driving test, it is an overall assessment of the impact dementia is having on your driving.\n' +
            'It assesses whether you are able to safely and comfortably drive. It is carried out by a specialist occupational therapist and an advanced driving\n' +
            'instructor. About 70% of all the people SDAS assess can go on driving. Talk to us via webchat or call our free helpline if you would like support in\n' +
            'being told to stop driving.\n' +
            'You can expect the assessment to include:\n' +
            '1. An interview which covers the licence holder’s medical and driving history, and goes through any current driving problems. There is then a\n' +
            'short pen and paper mental ability test.\n' +
            '2. Reaction time and limb strength (steering, braking) will be tested on a static ‘rig’. The rig is the set-up of a car with a steering wheel and foot\n' +
            'pedals linked to a computer. Eyesight is also checked and by this stage, a few people will be found not safe to drive.\n' +
            '3. The main part of the assessment is an on-road session in a dual-control car. The car will have brakes on both the passenger and driver sides.\n' +
            'The assessment is a drive on local roads following a pre-set route. The advanced driving instructor acts as passenger and the occupational\n' +
            'therapist acts as in in-car observer.\n' +
            '4. At the centre at the end of the assessment, staff will tell you what they have found. The Scottish Driving Assessment Service will report back to\n' +
            'the DVLA or the doctor who referred you and will put any recommendations in writing to you.\n' +
            'If you are found safe to drive, they will suggest strategies and adaptations to minimise risk and allow you to drive with greater safety and\n' +
            'confidence. If the DVLA decide you are safe to drive, they may renew your licence on a short term basis, most often valid for one year.\n' +
            'If you are found not safe to drive, staff will explain why and give advice about alternatives. If this is the case, it is with immediate affect and you\n' +
            'will be unable to drive yourself home.'
        },
        {
          title: '7 - REDUCING RISKS',
          body: 'OVERVIEW:\n' +
            'All drivers can take steps to make their driving safer. For someone with dementia, there are a number of ways to make driving easier and safer to\n' +
            'help minimise their risk of having an accident whilst driving.\n' +
            'FULL:\n' +
            'All drivers can take steps to make their driving safer. For someone with dementia, there are a number of ways to make driving easier and safer to\n' +
            'help minimise their risk of having an accident whilst driving. The following steps could help:\n' +
            '- Get a passenger to navigate or help along the journey\n' +
            '- Drive regularly to help maintain skills and confidence.\n' +
            '- Drive in daylight in good road and weather conditions.\n' +
            '- Drive without distractions, like the radio, for better concentration.\n' +
            '- Drive short distances on familiar routes at quiet times of the day\n' +
            '- Leave plenty of time for your journey to avoid stress and panic\n' +
            'If you are worried about driving, it can be helpful to talk to your GP. Sometimes it can become clear that you should no longer by driving. This\n' +
            'may because you:\n' +
            '- Feel less confident or more irritable on the road\n' +
            '- Get regularly lost or confused on familiar routes\n' +
            '- Begin to misjudge speed or distance\n' +
            '- Find yourself straying across lanes or hitting kerbs\n' +
            '- Have minor scrapes, accidents or near-misses\n' +
            '- Find that passengers express concern about your driving'
        },
        {
          title: '8 - RENEWAL',
          body: 'OVERVIEW:\n' +
            'The DVLA will send you a renewal reminder automatically 90 days before your licence is due to expire. You won’t have to pay a fee when you\n' +
            'renew your licence and must return your old photo-card licence when your receive your new licence.\n' +
            'FULL:\n' +
            'The DVLA will send you a renewal reminder automatically 90 days before your 1, 2 or 3 year licence is due to expire. If you don’t receive a\n' +
            'reminder, you should order form D1 as well as downloading and filling in the medical forms for your condition. Send them all to the DVLA,\n' +
            'following the address on the forms. If you’re over 70, you won’t have to pay a fee each time you won’t have to pay a fee each time you renew\n' +
            'your licence. You can also renew your short-term medical driving licence by post. Once you receive your new licence, you must send your old\n' +
            'photo-card licence to the DVLA when you receive your new licence.'
        },
        {
          title: '9 - DVLA SAYS CONTINUE',
          body: 'OVERVIEW:\n' +
            'If the DVLA decide you can continue to drive, they will issue a new driving licence which will be valid for limited time period, usually between 1 - 3\n' +
            'years. Even if you are issued with a licence, it is helpful to start thinking about the future, planning for the time when you will need to stop.\n' +
            'FULL:\n' +
            'If the DVLA decided you can continue to drive, they will issue a new driving licence which will be valid for a limited time period. For a person with\n' +
            'dementia, the licence is almost always one year. However, for someone with a very early dementia diagnosis, it could be up to a maximum of\n' +
            'three years. According to the Alzheimer Society, the majority of people with dementia continue driving for three years after being diagnosed.\n' +
            'Prior to the end of your licence period, the DVLA will contact you to renew your licence. Even if you are issued with a licence, it is helpful to begin\n' +
            'thinking ahead to the time when you will need to stop. Beginning to introduce practical measures that allows the adjustment to stopping driving\n' +
            'be more straightforward when the time comes.'
        },
        {
          title: '10 - TOLD TO STOP',
          body: 'OVERVIEW:\n' +
            'If the DVLA or your GP tells you to stop driving, you must follow their decision. You must return your licence and stop driving. If you are told to\n' +
            'stop, it can be helpful to consider the benefits, in particular the financial savings and to take control of your transportation needs.\n' +
            'FULL:\n' +
            'If the DVLA decides you cannot continue driving, you must return your driving licence to the DVLA and stop driving. Being unable to drive can be\n' +
            'difficult, especially when the decision is made for you. It is important to consider the benefits of not driving, in particular the financial savings and\n' +
            'to take control of your transportation needs using alternatives to driving so that you are still able to do the activities you enjoy. You could also\n' +
            'consider the benefits of not driving, for example no longer spending time finding parking spaces or having to drive in bad weather conditions.'
        },
        {
          title: '11 - DISAGREEING WITH DECISION',
          body: 'OVERVIEW:\n' +
            'If you disagree with the DVLA decision, you can write to them but you must provide proof that you meet the required standards for driving. If you\n' +
            'wish to appeal, a formal petition must be lodged with the local sheriffs court within 21 days. During the appeal, you are not allowed to drive.\n' +
            'FULL:\n' +
            'If you disagree with the DVLA decision, you can write to them but must provide relevant information that wasn’t included in the original\n' +
            'assessment. You must also include proof that you meet the required standards for driving (these are explained in the decision letter DVLA sent\n' +
            'you) & the reference number from your decision letter. Send to: DM Business Support, D7, DVLA, SA99 1ZZ\n' +
            'If you wish to appeal, a formal petition must be lodged with the local sheriffs court within 21 days. During the appeal, you are not allowed to\n' +
            'drive even if you feel you are able. You may want to get legal advice before you appeal - you might be able to get legal aid to pay for it. You\n' +
            'must tell DVLA in writing if you choose to appeal, send to: Driver and Vehicle Licensing Agency, Drivers Medical Group, Swansea, SA99 1DF'
        },
        {
          title: '12 - MAKE A COMPLAINT',
          body: 'OVERVIEW:\n' +
            'If you are unhappy with the service you have received from the DVLA, you can make a complaint. The quickest way to resolve the issue is to\n' +
            'contact the department you originally dealt with and are unhappy with.\n' +
            'FULL:\n' +
            'If you are unhappy with the service you have received from the DVLA, you can make a complaint. The quickest way to resolve the issue is to\n' +
            'contact the department you originally dealt with and are unhappy with. If you are then unhappy with the response from the relevant department,\n' +
            'make a formal complaint.'
        },
        {
          title: '13 - IF THE PERSON REFUSES TO TELL THE DVLA - CARER ONLY',
          body: 'OVERVIEW:\n' +
            'By not telling the DVLA about a dementia diagnosis, the person risks both a fine and/or prosecution, as well as potentially driving without\n' +
            'valid insurance and having an accident. In these circumstances, you or the persons doctor should try to persuade them to inform the DVLA or\n' +
            'contact the DVLA yourself.\n' +
            'FULL:\n' +
            'By not informing the DVLA, the person is at risk of a fine and/or prosecution, as well as the danger of driving without insurance and possibly\n' +
            'having an accident. In these circumstances, those close to the individual or their doctor should try to persuade the person to notify the DVLA,\n' +
            'or do so themselves. This can often be a very difficult issue for all of those involved.\n' +
            'If the person still doesn’t inform the DVLA, you can contact them directly. The DVLA are happy to discuss the situation with family members\n' +
            'over the phone, although they require a request in writing in order to take action. The DVLA will treat information sensitively and in\n' +
            'confidence, they will not tell the driver who contacted them. The DVLA will send the person with dementia what appears to be a routine,\n' +
            'unsolicited letter and a form to complete. This form includes a question relating specifically to memory and mentions dementia.\n' +
            'Alternatively, doctors should disclose the persons relevant medical information to the DVLA if they are unable to persuade the individual to\n' +
            'tell the DVLA themselves and if they believe the person’s continued driving poses a serious risk to others. This is according to guidance issued\n' +
            'to doctors. The doctor does not need the individuals permission to do this, but they should tell them afterwards in writing that they have done\n' +
            'so.'
        },
        {
          title: '14 - IF YOU THINK THEY SHOULD NO LONGER BE DRIVING - CARER ONLY',
          body: 'OVERVIEW:\n' +
            'If you think someone is no longer safe to drive, you should discuss this with them as they may share your worries. During this conversation, it\n' +
            'can be helpful to acknowledge how difficult a decision it is and encourage them to explore alternative transport options that give them control\n' +
            'or offer to do this with them.\n' +
            'FULL:\n' +
            'If you are not sure if the person is safe to drive, it is important to discuss with them. They may share your concerns or be willing to give up driving\n' +
            'once the problem has been pointed out. Sometimes, however, someone with dementia can’t see that there is a problem. The dementia may mean\n' +
            'they don’t understand how their symptoms affect their driving or they may be in denial about heir diagnosis. It is important to remember that it\n' +
            'is unlikely that they are being deliberately difficult.\n' +
            'During the conversation, it may help to acknowledge how difficult the decision may be for that person. Driving may have been their main\n' +
            'means of transportation for much of their life. Having to give that up can feel like a loss of independence and result in them feeling unhappy\n' +
            'or having low self-esteem.'
        },
        {
          title: '15 - IF THE PERSON REFUSES TO STOP DRIVING - CARER ONLY',
          body: 'OVERVIEW:\n' +
            'Being told to stop driving can be a difficult situation and the individual may be reluctant, even if the DVLA has concluded they are not safe. If\n' +
            'they refuse to stop driving, its important to contact the DVLA. As a temporary measure, many people hide the car keys or park the car out of\n' +
            'sight.\n' +
            'FULL:\n' +
            'Being told to stop driving can be a very difficult and upsetting situation for both the person and their family. It is important to recognise that\n' +
            'someone with dementia is probably not being deliberately difficult. Instead, the dementia itself may mean that the person does not realise\n' +
            'how their symptoms affect their driving. In some cases the person may be in denial about their diagnosis or keep forgetting that their licence\n' +
            'has been cancelled.\n' +
            'In such cases the person’s doctor or family should write in confidence to DVLA. The agency will then follow things up with the local police. The\n' +
            'DVLA will treat the information sensitively and in confidence, they will not tell the driver who contacted them. Many carers or family members\n' +
            'try temporary strategies like hiding car keys or parking the car somewhere it isn’t visible to the person.'
        },
        {
          title: '16 - MONITORING DRIVING - CARER ONLY',
          body: 'OVERVIEW:\n' +
            'It is a good idea for relatives, friends or others close to the person to tactfully monitor the persons driving skills. If you are worried about their\n' +
            'driving or feel unsafe, it is important to discuss this with the individual and, if necessary, their GP.\n' +
            'FULL:\n' +
            'Whilst their condition should be regularly reviewed by their doctor, it is a good idea for relatives, friends or others close to the person with\n' +
            'dementia to tactfully monitor the persons driving skills. If you do notice a change, feel unsafe being driven by them or notice that as a\n' +
            'passenger you are having to correct or guide them more, it is important to discuss these concerns with the individual and if necessary, the\n' +
            'doctor.\n' +
            'Sometimes it becomes clear that the person should no longer be driving. It can be helpful to watch for them:\n' +
            '-\n' +
            '-\n' +
            '-\n' +
            '-\n' +
            '-\n' +
            '-\n' +
            'Feeling less confident or more irritable on the road\n' +
            'Getting regularly lost or confused on familiar routes\n' +
            'Beginning to misjudge speed or distance\n' +
            'Finding themselves straying across lanes or hitting kerbs\n' +
            'Having minor scraps, accidents or near-misses\n' +
            'Finding that passengers are concerned or uncomfortable when they are driving'
        },
        {
          title: '17 - SUPPORT',
          body: 'OVERVIEW:\n' +
            'This section will signpost users to where they can get support if they have been told to stop driving. Content TBC\n' +
            'FULL:\n' +
            'This section will signpost users to where they can get support if they have been told to stop driving. Content TBC'
        }
      ]
    }
  },
  created () {
  },
  computed: {
    article () {
      let data = this.$route.query
      if (data.specification === 'A' && data.diagnose === 'A' && data.told === 'A' && data.decision === 'A') {
        return this.articles[9].body + this.articles[7].body + this.articles[8].body + this.articles[4].body
      }
      if (data.specification === 'A' && data.diagnose === 'A' && data.told === 'A' && data.decision === 'B') {
        return this.articles[6].body + this.articles[9].body + this.articles[10].body + this.articles[4].body
      }
      if (data.specification === 'A' && data.diagnose === 'A' && data.told === 'A' && data.decision === 'C') {
        return this.articles[10].body + this.articles[11].body + this.articles[12].body + this.articles[17].body
      }
      if (data.specification === 'A' && data.diagnose === 'A' && data.told === 'A' && data.decision === 'D') {
        return this.articles[5].body + this.articles[4].body + this.articles[7].body
      }
      if (data.specification === 'A' && data.diagnose === 'A' && data.told === 'B' && data.decision === 'A') {
        return this.articles[3].body + this.articles[9].body + this.articles[7].body + this.articles[8].body + this.articles[4].body
      }
      if (data.specification === 'A' && data.diagnose === 'A' && data.told === 'B' && data.decision === 'B') {
        return this.articles[3].body + this.articles[6].body + this.articles[9].body + this.articles[10].body + this.articles[4].body
      }
      if (data.specification === 'A' && data.diagnose === 'A' && data.told === 'B' && data.decision === 'C') {
        return this.articles[3].body + this.articles[10].body + this.articles[11].body + this.articles[12].body + this.articles[17].body
      }
      if (data.specification === 'A' && data.diagnose === 'A' && data.told === 'B' && data.decision === 'D') {
        return this.articles[3].body + this.articles[5].body + this.articles[4].body
      }
      if (data.specification === 'A' && data.diagnose === 'A' && data.told === 'C') {
        return this.articles[1].body + this.articles[2].body + this.articles[3].body + this.articles[5].body + this.articles[4].body
      }
      if (data.specification === 'A' && data.diagnose === 'B') {
        return this.articles[1].body + this.articles[2].body + this.articles[3].body + this.articles[5].body + this.articles[4].body
      }
    }
  }
}
</script>

<style lang="scss">
  .drivers-checklist-form-final {
    display: flex;
    justify-content: space-between;
    width: 100%;
    .card {
      margin-top: 0;
    }
    .left {
      width: 75%;
      .book{
        display: flex;
        margin-bottom: 20px;
        height: 900px;
        .left-side{
          width: 50%;
          border: 15px solid #0eb75a;
          border-bottom-left-radius: 10px;
          border-top-left-radius: 10px;
          background-color: #0eb75a;
          .header-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 25px;
            .icon {
              width: 40px;
              height: 40px;
              border-radius: 40px;
              background: #282425;
              position: relative;
              margin-top: -20px;
              i {
                font-size: 20px;
                width: 20px;
                height: 20px;
                color: #0eb75a;
                transform: rotate(270deg);
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                margin: auto;
              }
            }
            h1 {
              color: #282425;
              width: 90%;
              margin-top: 5px;
            }
          }
          h1{
            text-align: center;
          }
          .content{
            background-color: #fff;
            height: 84%;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            padding: 10px;
            ol{
              padding-left: 15px;
              list-style: none;
              counter-reset: li;
              li {
                font-size: 18px;
                margin-bottom: 10px;
                &:before {
                  content: counter(li);
                  color: #0eb75a;
                  display: inline-block;
                  width: 1em;
                  margin-left: -1em;
                  counter-increment: li;
                }
              }
            }
          }
          .control {
            display: flex;
            justify-content: space-between;
            background-color: #fff;
            border-bottom-left-radius: 10px;
            border-bottom-right-radius: 10px;
            padding: 10px;
            button {
              width: 135px;
              height: 35px;
              border-radius: 5px;
              background-color: #0eb75a;
              border: none;
              font-size: 14px;
              font-weight: 700;
            }
            .dark {
              color: #fff;
              background-color: #000;
            }
          }
        }
        .right-side{
          width: 50%;
          border: 15px solid #0eb75a;
          color: #717171;
          border-bottom-right-radius: 10px;
          border-top-right-radius: 10px;
          box-sizing: border-box;
          background-color: #0eb75a;
          .content {
            padding: 30px 20px;
            border-radius: 10px;
            box-sizing: border-box;
            background: #fff;
            height: 100%;
            overflow: scroll;
          }
        }
      }
      .bottom {
        display: flex;
        justify-content: space-between;
      }
    }
    .right {
      width: 23%;
    }
  }

  @media all and (max-width: 891px){
    .drivers-checklist-form-final {
      .card {
        width: 310px;
        height: 280px;
        margin-bottom: 15px;
      }
      .left {
        width: 310px;
        .book {
          height: auto;
          display: block;
          .left-side {
            box-sizing: border-box;
            border-radius: 0;
            width: 100%;
            .header-content {
              padding: 0;
              h1 {
                font-size: 25px;
              }
            }
            .control {
              .desktop-icon {
                display: none;
              }
              .mobile-icon {
                display: block;
                transform: rotate(90deg);
                font-size: 30px;
                margin: 0 18px 0 0;
              }
              button{
                width: 70px;
                font-size: 12px;
              }
            }
          }
          .right-side {
            width: 100%;
            border-radius: 0;
          }
        }
        .bottom {
          width: 300px;
          display: block;
          .small-configure-thumb {
            margin-bottom: 15px;
          }
        }
      }
    }
  }
</style>
