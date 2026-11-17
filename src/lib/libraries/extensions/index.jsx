import React from 'react';
import {FormattedMessage} from 'react-intl';

import musicIconURL from './music/music.png';
import musicInsetIconURL from './music/music-small.svg';

import penIconURL from './pen/pen.png';
import penInsetIconURL from './pen/pen-small.svg';

import videoSensingIconURL from './videoSensing/video-sensing.png';
import videoSensingInsetIconURL from './videoSensing/video-sensing-small.svg';

import faceSensingIconURL from './faceSensing/face-sensing.svg';
import faceSensingInsetIconURL from './faceSensing/face-sensing-small.svg';

import text2speechIconURL from './text2speech/text2speech.png';
import text2speechInsetIconURL from './text2speech/text2speech-small.svg';

import translateIconURL from './translate/translate.png';
import translateInsetIconURL from './translate/translate-small.png';

import makeymakeyIconURL from './makeymakey/makeymakey.png';
import makeymakeyInsetIconURL from './makeymakey/makeymakey-small.svg';

import microbitIconURL from './microbit/microbit.png';
import microbitInsetIconURL from './microbit/microbit-small.svg';
import microbitConnectionIconURL from './microbit/microbit-illustration.svg';
import microbitConnectionSmallIconURL from './microbit/microbit-small.svg';

import ev3IconURL from './ev3/ev3.png';
import ev3InsetIconURL from './ev3/ev3-small.svg';
import ev3ConnectionIconURL from './ev3/ev3-hub-illustration.svg';
import ev3ConnectionSmallIconURL from './ev3/ev3-small.svg';

import wedo2IconURL from './wedo2/wedo.png'; // TODO: Rename file names to match variable/prop names?
import wedo2InsetIconURL from './wedo2/wedo-small.svg';
import wedo2ConnectionIconURL from './wedo2/wedo-illustration.svg';
import wedo2ConnectionSmallIconURL from './wedo2/wedo-small.svg';
import wedo2ConnectionTipIconURL from './wedo2/wedo-button-illustration.svg';

import boostIconURL from './boost/boost.png';
import boostInsetIconURL from './boost/boost-small.svg';
import boostConnectionIconURL from './boost/boost-illustration.svg';
import boostConnectionSmallIconURL from './boost/boost-small.svg';
import boostConnectionTipIconURL from './boost/boost-button-illustration.svg';

import gdxforIconURL from './gdxfor/gdxfor.png';
import gdxforInsetIconURL from './gdxfor/gdxfor-small.svg';
import gdxforConnectionIconURL from './gdxfor/gdxfor-illustration.svg';
import gdxforConnectionSmallIconURL from './gdxfor/gdxfor-small.svg';

import customExtensionIcon from './custom/custom.svg';
import customURLIcon from './custom/customURL.svg';

import {APP_NAME} from '../../brand';

let platform = "browsers";
if (window.cordova && window.cordova.platformId !== "browser") {
    platform = window.cordova.platformId;
} else if (navigator.userAgent.indexOf("Electron/") > 0) {
    platform = "electron";
}

const urlParams = new URLSearchParams(location.search);
const IsLocal = String(window.location.href).startsWith(`http://localhost:`);
const IsLiveTests = urlParams.has('livetest');
const IsSecret = urlParams.has('allpowerscombined');
const IsMysterious = urlParams.has('666');

const menuItems = [
    {
        name: 'Custom Extension',
        extensionId: 'custom_extension',
		iconURL: require('../extensions/custom/CustomEx.svg'),
	    insetIconURL: require('../extensions/custom/CustomSmall.svg'),
        description: 'Load custom extensions from URLs, files, or JavaScript source code.',
        tags: ['custom'],
        featured: true
        // Not marked as incompatible with Scratch so that clicking on it doesn't show a prompt
    },
	{
        // not really an extension, but it's easiest to present it as one
        name: (
            <FormattedMessage
                defaultMessage="Custom Reporters"
                description="Name of custom reporters extension"
                id="tw.customReporters.name"
            />
        ),
        extensionId: 'procedures_enable_return',
        iconURL: require('../extensions/custom/return.svg'),
		insetIconURL: require('../extensions/icons/turbowarp.svg'),
		customInsetColor: '#ff4d4d',
        description: (
            <FormattedMessage
                defaultMessage="Allow custom blocks to output values and be used as inputs."
                description="Description of custom reporters extension"
                id="tw.customReporters.description"
            />
        ),
        tags: ['tw'],
        featured: true,
        incompatibleWithScratch: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Music"
                description="Name for the 'Music' extension"
                id="gui.extension.music.name"
            />
        ),
        extensionId: 'music',
        iconURL: musicIconURL,
        insetIconURL: musicInsetIconURL,
		customInsetColor: '#CF63CF',
        description: (
            <FormattedMessage
                defaultMessage="Play instruments and drums."
                description="Description for the 'Music' extension"
                id="gui.extension.music.description"
            />
        ),
        tags: ['scratch'],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Pen"
                description="Name for the 'Pen' extension"
                id="gui.extension.pen.name"
            />
        ),
        extensionId: 'pen',
        iconURL: penIconURL,
        insetIconURL: penInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Draw with your sprites."
                description="Description for the 'Pen' extension"
                id="gui.extension.pen.description"
            />
        ),
        tags: ['scratch'],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Video Sensing"
                description="Name for the 'Video Sensing' extension"
                id="gui.extension.videosensing.name"
            />
        ),
        extensionId: 'videoSensing',
        iconURL: videoSensingIconURL,
        insetIconURL: videoSensingInsetIconURL,
		customInsetColor: '#74BDDC',
        description: (
            <FormattedMessage
                defaultMessage="Sense motion with the camera."
                description="Description for the 'Video Sensing' extension"
                id="gui.extension.videosensing.description"
            />
        ),
        tags: ['scratch'],
        featured: true
    },
	/*
    {
        name: (
            <FormattedMessage
                defaultMessage="Face Sensor"
                description="Name for the 'Face Sensing' extension"
                id="tw.extension.faceSensing.name"
            />
        ),
        extensionId: 'faceSensing',
        extensionURL: 'https://extensions.turbowarp.org/lab/face-sensing.js',
        iconURL: faceSensingIconURL,
        insetIconURL: faceSensingInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Sense faces with the camera."
                description="Description for the 'Face Sensing' extension"
                id="tw.extension.faceSensing.description"
            />
        ),
        tags: ['scratch'],
        featured: true
    },
	*/
    {
        name: (
            <FormattedMessage
                defaultMessage="Text to Speech"
                description="Name for the Text to Speech extension"
                id="gui.extension.text2speech.name"
            />
        ),
        extensionId: 'text2speech',
        collaborator: 'Amazon Web Services',
        iconURL: text2speechIconURL,
        insetIconURL: text2speechInsetIconURL,
		customInsetColor: '#9966FF',
        description: (
            <FormattedMessage
                defaultMessage="Make your projects talk."
                description="Description for the Text to speech extension"
                id="gui.extension.text2speech.description"
            />
        ),
        tags: ['scratch'],
        featured: true,
        internetConnectionRequired: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Translate"
                description="Name for the Translate extension"
                id="gui.extension.translate.name"
            />
        ),
        extensionId: 'translate',
        collaborator: 'Google',
        iconURL: translateIconURL,
        insetIconURL: translateInsetIconURL,
		customInsetColor: '#5CB1D6',
        description: (
            <FormattedMessage
                defaultMessage="Translate text into many languages."
                description="Description for the Translate extension"
                id="gui.extension.translate.description"
            />
        ),
        tags: ['scratch'],
        featured: true,
        internetConnectionRequired: true
    },
    {
        name: 'Makey Makey',
        extensionId: 'makeymakey',
        collaborator: 'JoyLabz',
        iconURL: makeymakeyIconURL,
        insetIconURL: makeymakeyInsetIconURL,
		customInsetColor: '#E64D00',
        description: 'Make anything into a key, with more modifications by GaiaWindWave90.',
        tags: ['scratch'],
        featured: true
    },
    {
        name: 'micro:bit',
        extensionId: 'microbit',
        collaborator: 'micro:bit',
        iconURL: microbitIconURL,
        insetIconURL: microbitInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Connect your projects with the world."
                description="Description for the 'micro:bit' extension"
                id="gui.extension.microbit.description"
            />
        ),
        tags: ['scratch'],
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: false,
        connectionIconURL: microbitConnectionIconURL,
        connectionSmallIconURL: microbitConnectionSmallIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Message to help people connect to their micro:bit."
                id="gui.extension.microbit.connectingMessage"
            />
        ),
        helpLink: 'https://scratch.mit.edu/microbit'
    },
    {
        name: 'LEGO MINDSTORMS EV3',
        extensionId: 'ev3',
        collaborator: 'LEGO',
        iconURL: ev3IconURL,
        insetIconURL: ev3InsetIconURL,
		customInsetColor: '#FFBF00',
        description: (
            <FormattedMessage
                defaultMessage="Build interactive robots and more."
                description="Description for the 'LEGO MINDSTORMS EV3' extension"
                id="gui.extension.ev3.description"
            />
        ),
        tags: ['scratch'],
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: false,
        connectionIconURL: ev3ConnectionIconURL,
        connectionSmallIconURL: ev3ConnectionSmallIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting. Make sure the pin on your EV3 is set to 1234."
                description="Message to help people connect to their EV3. Must note the PIN should be 1234."
                id="gui.extension.ev3.connectingMessage"
            />
        ),
        helpLink: 'https://scratch.mit.edu/ev3'
    },
    {
        name: 'LEGO BOOST',
        extensionId: 'boost',
        collaborator: 'LEGO',
        iconURL: boostIconURL,
        insetIconURL: boostInsetIconURL,
		customInsetColor: '#FFAB19',
        description: (
            <FormattedMessage
                defaultMessage="Bring robotic creations to life."
                description="Description for the 'LEGO BOOST' extension"
                id="gui.extension.boost.description"
            />
        ),
        tags: ['scratch'],
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: true,
        connectionIconURL: boostConnectionIconURL,
        connectionSmallIconURL: boostConnectionSmallIconURL,
        connectionTipIconURL: boostConnectionTipIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Message to help people connect to their BOOST."
                id="gui.extension.boost.connectingMessage"
            />
        ),
        helpLink: 'https://scratch.mit.edu/boost'
    },
    {
        name: 'LEGO Education WeDo 2.0',
        extensionId: 'wedo2',
        collaborator: 'LEGO',
        iconURL: wedo2IconURL,
        insetIconURL: wedo2InsetIconURL,
		customInsetColor: '#FF6680',
        description: (
            <FormattedMessage
                defaultMessage="Build with motors and sensors."
                description="Description for the 'LEGO WeDo 2.0' extension"
                id="gui.extension.wedo2.description"
            />
        ),
        tags: ['scratch'],
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: true,
        connectionIconURL: wedo2ConnectionIconURL,
        connectionSmallIconURL: wedo2ConnectionSmallIconURL,
        connectionTipIconURL: wedo2ConnectionTipIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Message to help people connect to their WeDo."
                id="gui.extension.wedo2.connectingMessage"
            />
        ),
        helpLink: 'https://scratch.mit.edu/wedo'
    },
    {
        name: 'Go Direct Force & Acceleration',
        extensionId: 'gdxfor',
        collaborator: 'Vernier',
        iconURL: gdxforIconURL,
        insetIconURL: gdxforInsetIconURL,
		customInsetColor: '#4C97FF',
        description: (
            <FormattedMessage
                defaultMessage="Sense push, pull, motion, and spin."
                description="Description for the Vernier Go Direct Force and Acceleration sensor extension"
                id="gui.extension.gdxfor.description"
            />
        ),
        tags: ['scratch'],
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: false,
        connectionIconURL: gdxforConnectionIconURL,
        connectionSmallIconURL: gdxforConnectionSmallIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Message to help people connect to their force and acceleration sensor."
                id="gui.extension.gdxfor.connectingMessage"
            />
        ),
        helpLink: 'https://scratch.mit.edu/vernier'
    },
	//Exts
	{
        name: 'Wonder Blocks',
        extensionId: 'wonderblocks',
        iconURL: require('../extensions/gaiamod/WonderBlocks.png'),
	    insetIconURL: require('../extensions/icons/gaiamod.png'),
		customInsetColor: '#2D2DD2',
        tags: ['gm', 'preload'],
        description: 'Some mysterious blocks.',
        collaborator: 'GaiaWindWave90',
        featured: true,
        incompatibleWithScratch: true
    },
	 {
        name: 'App Utilities',
        extensionId: 'appmaker',
        iconURL: require('../extensions/librekitten/appmaker/appmaker.svg'),
	    insetIconURL: require('../extensions/librekitten/appmaker/software-small.svg'),
        tags: ['other', 'preload'],
		collaborator: 'LibreKitten',
        description: 'Develop apps in PotentiaMod.',
        featured: true,
        incompatibleWithScratch: true
    },
	{
        name: 'Cozmo',
        extensionId: 'cozmo',
        tags: ['cognimates', 'preload'],
		isNew: false,
        iconURL: require('../extensions/cognimates/cozmo-ext.png'),
		insetIconURL: require('../extensions/cognimates/cozmo-small.jpg'),
		customInsetColor: '#FFFFFF',
		collaborator: 'Anki',
        description: 'Play with Cozmo in PotentiaMod.',
        featured: true,
        incompatibleWithScratch: true
    },
	{
        name: 'Tinkibot',
        extensionId: 'tinkibot',
		tags: ['preload'],
		isNew: false,
        iconURL: require('../extensions/tinkibot/tinkibot.png'),
		insetIconURL: require('../extensions/tinkibot/tinkimo-small.png'),
		customInsetColor: '#FFFFFF',
		collaborator: 'Tinkimo',
        description: 'Control one or more Tinkibots',
        featured: true,
        internetConnectionRequired: false,
        incompatibleWithScratch: true
    },
  {
    name: 'Google Maps',
    extensionId: "googleMap",
    collaborator: "Champierre, TYiC",
	tags: ['preload'],
	isNew: false,
	iconURL: require('../extensions/googleMap/googleMap.png'),
	insetIconURL: require('../extensions/googleMap/googleMap-small.png'),
    description: 'Display geographic location using the latitude and longitude coordinates (Experimental).',
    featured: true,
    disabled: false,
    internetConnectionRequired: true,
    useAutoScan: false,
    helpLink: "https://github.com/estea8968/scratch3-internet",
        incompatibleWithScratch: true
  },
	{
        name: 'Ruby',
        extensionId: 'ruby',
        tags: ['preload'],
		isNew: false,
        iconURL: require('../extensions/smalruby-ruby/smalruby-ruby.svg'),
	    insetIconURL: require('../extensions/smalruby-ruby/smalruby-ruby-small.svg'),
		collaborator: 'SmallRuby',
        description: 'Use Ruby methods in PotentiaMod.',
        featured: true,
        disabled: false,
        bluetoothRequired: false,
        internetConnectionRequired: false,
        launchPeripheralConnectionFlow: false,
        useAutoScan: false,
        incompatibleWithScratch: true
    },
	{
        name: 'Alexa',
        extensionId: 'alexa',
        tags: ['cognimates', 'preload'],
		isNew: false,
        iconURL: require('../extensions/cognimates/Alexa_extension.png'),
		collaborator: 'Amazon',
        description: 'Talk to Alexa in PotentiaMod.',
        featured: true,
        incompatibleWithScratch: true
    },
  {
    name:'Google Sheets',
    extensionId: "rwGoogle",
    collaborator: "estea chen, TYiC",
	tags: ['preload'],
	isNew: false,
    iconURL: require('../extensions/rwgoogle/rwgoogle.png'),
	insetIconURL: require('../extensions/rwgoogle/clound-small.png'),
    description: 'Read and write Google Sheets and Google Forms.',
    featured: true,
    disabled: false,
    // bluetoothRequired: false,
    internetConnectionRequired: true,
    // launchPeripheralConnectionFlow: false,
    useAutoScan: false,
    helpLink: "https://github.com/estea8968/scratch3-internet",
        incompatibleWithScratch: true
  },
	{
        name: 'QR Code',
        extensionId: 'qrcode',
        tags: ['preload'],
		isNew: false,
        collaborator: 'Sugiura Lab',
        iconURL: require('../extensions/qrcode/qrcode.png'),
		insetIconURL: require('../extensions/qrcode/qrcode-small.svg'),
		description: 'Scans things with a QR Code extension.',
        featured: true,
        disabled: false,
        internetConnectionRequired: false,
        bluetoothRequired: false,
        incompatibleWithScratch: true
    },
	{
    name: "LineNotify",
    extensionId: "linenotify",
    collaborator: "estea chen",
	tags: ['preload'],
	isNew: false,
    iconURL: require('../extensions/linenotify/linenotify.svg'),
	insetIconURL: require('../extensions/linenotify/linenotify_small.svg'),
    description: "Use Line Notify to send messages.",
    featured: true,
    disabled: false,
    internetConnectionRequired: true,
    bluetoothRequired: false,
    incompatibleWithScratch: true
  },
	{
        name: 'KidsBoard',
        extensionId: 'kidsboard',
        collaborator: 'Nekoma Manufacturing',
        iconURL: require('../extensions/kidsboard/kidsboard.svg'),
	    insetIconURL: require('../extensions/kidsboard/kidsboard-small.svg'),
		tags: ['preload'],
		isNew: false,
        description: 'Connect KidsBoard via Bluetooth to operate the LEDs, buttons, speaker, and sensors.',
        featured: true,
        bluetoothRequired: true,
        incompatibleWithScratch: true
    },
	{
        name: 'EIM Messaging',
        extensionId: 'eim',
        iconURL: require('../extensions/eim/illustration.jpg'),
		insetIconURL: require('../extensions/eim/small.svg'),
        tags: ['preload'],
		isNew: false,
		collaborator: 'CodeLab',
        description: 'Everything is a mesage! Contains capabilities of all the other extensions.',
        featured: true,
        incompatibleWithScratch: true
    },
{
        name: 'Marty the Robot',
        extensionId: 'marty',
        collaborator: 'Robotical',
        iconURL: require('../extensions/marty/marty.png'),
	    insetIconURL: require('../extensions/marty/marty-small.svg'),
        description: 'Play and program with Marty.',
        tags: ['preload'],
        featured: true,
        internetConnectionRequired: true,
        bluetoothRequired: true,
        incompatibleWithScratch: true
    },
	{
        name: 'Ohbot',
        extensionId: 'ohbot',
        iconURL: require('../extensions/ohbot/ohbot.png'),
	    insetIconURL: require('../extensions/ohbot/ohbot-small.svg'),
		collaborator: 'Ohbot',
		tags: ['preload'],
        description: 'Control your Ohbot',
        featured: true,
        incompatibleWithScratch: true
    },
	{
        name: 'Line',
        extensionId: 'line',
        collaborator: 'Ankurugranpa',
        iconURL: require('../extensions/line/line.png'),
	    insetIconURL: require('../extensions/line/line-small.png'),
		customInsetColor: '#45C505',
		tags: ['special', 'othermods'],
        description: 'Connect to LINE message API!',
        featured: true,
        disabled: false,
        internetConnectionRequired: true,
        bluetoothRequired: false,
        incompatibleWithScratch: true
    }, 
	{
        name: 'Face Emotion Sensing',
        extensionId: 'poseFace',
        tags: ['preload'],
		isNew: false,
        iconURL: require('../extensions/poseFace/pose-face.png'),
		insetIconURL: require('../extensions/poseFace/pose-face-small.svg'),
		collaborator: 'Raise Playground',
        description: 'Sense face movement with the camera with added emotion detection.',
        featured: true,
        incompatibleWithScratch: true
    },
	{
        name: 'Body Sensing',
        extensionId: 'poseBody',
        tags: ['preload'],
		isNew: false,
        iconURL: require('../extensions/poseBody/pose-body.png'),
		insetIconURL: require('../extensions/poseBody/pose-body-small.svg'),
		collaborator: 'Raise Playground',
        description: 'Sense body position with the camera.',
        featured: true,
        incompatibleWithScratch: true
    },
	{
        name: 'Hand Sensing',
        extensionId: 'poseHand',
        tags: ['preload'],
		isNew: false,
        iconURL: require('../extensions/poseHand/pose-hand.png'),
		insetIconURL: require('../extensions/poseHand/pose-hand-small-3.svg'),
		collaborator: 'Raise Playground',
        description: 'Sense hand position with the camera.',
        featured: true,
        incompatibleWithScratch: true
    },
	{
        name: 'Object Detection',
        extensionId: 'objectDetection',
		tags: ['preload'],
		isNew: false,
        iconURL: require('../extensions/objectDetection/objectdetection.png'),
		insetIconURL: require('../extensions/objectDetection/objectdetectionsmall.svg'),
        description: 'Detect and identify objects in the camera view.',
		collaborator: 'Raise Playground',
        featured: true,
        incompatibleWithScratch: true
    },
	{
    name: "Text Sentiment",
    extensionId: "textSentiment",
    collaborator: "TYiC",
	tags: ['preload'],
	isNew: false,
    iconURL: require('../extensions/textSentiment/textSentiment.png'),
	insetIconURL: require('../extensions/textSentiment/textSentiment-small.png'),
    description: "Text Sentiment.",
    featured: true,
    disabled: false,
    internetConnectionRequired: true,
    useAutoScan: false,
    helpLink: "https://github.com/estea8968/scratch3-internet",
    incompatibleWithScratch: true
  },
  	{
        name: 'Smart Lumies',
        extensionId: 'smartLumies',
        collaborator: 'PlusPlus',
        iconURL: require('../extensions/smart-lumies/smart-lumies.png'),
	    insetIconURL: require('../extensions/smart-lumies/smart-lumies-small.svg'),
        description: 'Have fun with Smart Lumies Cube in PotentiaMod!',
		tags: ['preload'],
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: false,
        launchPeripheralConnectionFlow: false,
        useAutoScan: false,
		connectionIconURL: require('../extensions/smart-lumies/smart-lumies-illustration.svg'),
        connectionSmallIconURL: require('../extensions/smart-lumies/smart-lumies-small.svg'),
        connectionTipIconURL: require('../extensions/smart-lumies/smart-lumies-button-illustration.svg'),
        connectingMessage: 'Have your Cube nearby.',
        helpLink: 'https://smartlumies.com',
        incompatibleWithScratch: true
    },
	{
        name: 'Magic Blue UU',
        extensionId: 'magicBlueUU',
        collaborator: 'PlusPlus',
        iconURL: require('../extensions/magicBlueUU/magicBlueUU.png'),
	    insetIconURL: require('../extensions/magicBlueUU/magicBlueUU-small.svg'),
		tags: ['preload'],
        description: (
            <FormattedMessage
                defaultMessage='Magic Blue UU extension.'
                description='Description for the Magic Blue UU extension'
                id='gui.extension.magicBlueUU.description'
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: false,
        launchPeripheralConnectionFlow: false,
        useAutoScan: false,
        connectingMessage: (
            <FormattedMessage
                defaultMessage='Connecting'
                description='Have your Magic Blue UU nearby.'
                id='gui.extension.magicBlueUU.connectingMessage'
            />
        )
    },
	{
        name: 'Smart Lights',
        extensionId: 'hue',
        tags: ['cognimates', 'preload'],
		isNew: false,
        iconURL: require('../extensions/cognimates/Hue_extension.png'),
		collaborator: 'Cognimates',
        description: 'Blocks used for changing and modifying lights.',
        featured: true,
        incompatibleWithScratch: true
    },
	{
        name: 'Feelings',
        extensionId: 'sentiment',
        tags: ['cognimates', 'preload'],
		isNew: false,
        iconURL: require('../extensions/cognimates/sentiment_ext.png'),
		insetIconURL: require('../extensions/cognimates/sentiment-small.svg'),
		collaborator: 'Cognimates',
        description: 'Detects feelings',
        featured: true,
        incompatibleWithScratch: true
    },
	{
        name: 'Wemo',
        extensionId: 'wemo',
        tags: ['cognimates', 'preload'],
		isNew: false,
        iconURL: require('../extensions/cognimates/wemo_ext.png'),
		collaborator: 'Cognimates',
        description: 'Play with Wemo in PotentiaMod.',
        featured: true,
        incompatibleWithScratch: true
    },
	{
        name: (
            <FormattedMessage
                defaultMessage="HighClass"
                description="Name of HighClass extension"
                id="sn.hc.name"
            />
        ),
        extensionId: 'hc',
		tags: ['preload'],
		isNew: false,
		collaborator: 'Cubix Entertainment',
        iconURL: require('../extensions/hc/hc.svg'),
	    insetIconURL: require('../extensions/hc/hc-small.svg'),
        description: (
            <FormattedMessage
                defaultMessage="Special Blocks that make development alot easier. Also compatible with PotentiaMod."
                description="Description of HighClass extension"
                id="sn.hc.description"
            />
        ),
        featured: true,
        incompatibleWithScratch: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Snap"
                description="Name of Snext Audio Player extension"
                id="sn.snap.name"
            />
        ),
        extensionId: 'snap',
		tags: ['preload'],
		isNew: false,
		collaborator: 'Cubix Entertainment',
        iconURL: require('../extensions/snap/snap.svg'),
	    insetIconURL: require('../extensions/snap/snap-small.svg'),
        description: (
            <FormattedMessage
                defaultMessage="SNext Audio Player or SNAP is an extension developed to allow developers to play audio from an external source."
                description="Description of SNext Audio Player extension"
                id="sn.snap.description"
            />
        ),
        featured: true,
        internetConnectionRequired: true,
        incompatibleWithScratch: true
    },
	{
        name: (
            <FormattedMessage
                defaultMessage="Robobo"
                description="Robobo 3.0 Extension"
                id="gui.extension.robobo.name"
            />
        ),
        extensionId: 'robobo',
        iconURL: require('../extensions/robobo/robobo.png'),
	    insetIconURL: require('../extensions/robobo/robobo-small.svg'),
		tags: ['preload'],
		isNew: false,
		collaborator: 'MINT',
        description: (
            <FormattedMessage
                defaultMessage="Robobo extension."
                description="Description for the 'Music' extension"
                id="gui.extension.robobo.description"
            />
        ),
        featured: true,
        internetConnectionRequired: true,
        incompatibleWithScratch: true
    },    
	{
    name: 'LEGO Mario',
    extensionId: 'legoMario',
    collaborator: 'bricklife',
    iconURL: require('../extensions/legomario/legomario.png'),
    insetIconURL: require('../extensions/legomario/legomario-small.svg'),
    description: 'Know what he\'s doing!',
	tags: ['preload'],
	isNew: false,
    featured: true,
    disabled: false,
    bluetoothRequired: true,
    internetConnectionRequired: true,
    launchPeripheralConnectionFlow: true,
    useAutoScan: true,
    connectionIconURL: require('../extensions/legomario/legomario-illustration.svg'),
    connectionSmallIconURL: require('../extensions/legomario/legomario-small.svg'),
    connectionTipIconURL: require('../extensions/legomario/legomario-button-illustration.svg'),
    connectingMessage: 'Connecting',
    helpLink: 'https://scratch.mit.edu/boost',
    incompatibleWithScratch: true
    },
	{
    name: 'LEGO Luigi',
    extensionId: 'legoLuigi',
    collaborator: 'bricklife',
    iconURL: require('../extensions/legoluigi/legoluigi.png'),
    insetIconURL: require('../extensions/legoluigi/legoluigi-small.svg'),
    description: 'Know what he\'s doing!',
	tags: ['preload'],
	isNew: false,
    featured: true,
    disabled: false,
    bluetoothRequired: true,
    internetConnectionRequired: true,
    launchPeripheralConnectionFlow: true,
    useAutoScan: true,
    connectionIconURL: require('../extensions/legoluigi/legoluigi-illustration.svg'),
    connectionSmallIconURL: require('../extensions/legoluigi/legoluigi-small.svg'),
    connectionTipIconURL: require('../extensions/legoluigi/legoluigi-button-illustration.svg'),
    connectingMessage: 'Connecting',
    helpLink: 'https://scratch.mit.edu/boost',
    incompatibleWithScratch: true
    },
	{
    name: 'LEGO Peach',
    extensionId: 'legoPeach',
    collaborator: 'bricklife',
    iconURL: require('../extensions/legopeach/legopeach.png'),
    insetIconURL: require('../extensions/legopeach/legopeach-small.svg'),
    description: 'Know what she\'s doing!',
	tags: ['preload'],
	isNew: false,
    featured: true,
    disabled: false,
    bluetoothRequired: true,
    internetConnectionRequired: true,
    launchPeripheralConnectionFlow: true,
    useAutoScan: true,
    connectionIconURL: require('../extensions/legopeach/legopeach-illustration.svg'),
    connectionSmallIconURL: require('../extensions/legopeach/legopeach-small.svg'),
    connectionTipIconURL: require('../extensions/legopeach/legopeach-button-illustration.svg'),
    connectingMessage: 'Connecting',
    helpLink: 'https://scratch.mit.edu/boost',
    incompatibleWithScratch: true
    },
	{
        name: 'OneGpio Arduino',
        extensionId: 'onegpioArduino',
        collaborator: 'Mr. Y\'s Lab',
        iconURL: require('../extensions/onegpioArduino/onegpioArduino.png'),
	    insetIconURL: require('../extensions/onegpioArduino/onegpioArduino-small.png'),
        description: 'OneGPIOArduino',
        tags: ['preload'],
        featured: true,
        internetConnectionRequired: true,
        bluetoothRequired: false,
        helpLink: 'https://mryslab.github.io/s3-extend/',
        incompatibleWithScratch: true
    },
    {
        name: 'OneGpio Raspberry Pi',
        extensionId: 'onegpioRpi',
        collaborator: 'Mr. Y\'s Lab',
        iconURL: require('../extensions/onegpioRpi/onegpioRpi.png'),
	    insetIconURL: require('../extensions/onegpioRpi/onegpioRpi-small.png'),
        description: 'OneGPIORpi',
        tags: ['preload'],
        featured: true,
        internetConnectionRequired: true,
        bluetoothRequired: false,
        helpLink: 'https://mryslab.github.io/s3-extend/',
        incompatibleWithScratch: true

    },
    {
        name: 'OneGpio Picoboard',
        extensionId: 'onegpioPicoboard',
        collaborator: 'Mr. Y\'s Lab',
		iconURL: require('../extensions/onegpioPicoboard/onegpioPicoboard.jpg'),
	    insetIconURL: require('../extensions/onegpioPicoboard/onegpioPicoboard-small.png'),
        description: 'OneGPIOPicoboard',
        tags: ['preload'],
        featured: true,
        internetConnectionRequired: true,
        bluetoothRequired: false,
        helpLink: 'https://mryslab.github.io/s3-extend/',
        incompatibleWithScratch: true

    },
    {
        name: 'OneGpio Playground Express',
        extensionId: 'onegpioCpx',
        collaborator: 'Mr. Y\'s Lab',
		iconURL: require('../extensions/onegpioCpx/onegpioCpx.jpg'),
	    insetIconURL: require('../extensions/onegpioCpx/onegpioCpx-small.png'),
        description: 'OneGPIOCpx',
        tags: ['preload'],
        featured: true,
        internetConnectionRequired: true,
        bluetoothRequired: false,
        helpLink: 'https://mryslab.github.io/s3-extend/',
        incompatibleWithScratch: true

    },
    {
        name: 'OneGpio RoboHAT MM1',
        extensionId: 'onegpioRoboHAT',
        collaborator: 'Mr. Y\'s Lab',
		iconURL: require('../extensions/onegpioRoboHAT/onegpioRoboHAT.png'),
	    insetIconURL: require('../extensions/onegpioRoboHAT/onegpioRoboHAT-small.png'),
        description: 'OneGPIORoboHAT',
        tags: ['preload'],
        featured: true,
        internetConnectionRequired: true,
        bluetoothRequired: false,
        helpLink: 'https://mryslab.github.io/s3-extend/',
        incompatibleWithScratch: true

    },
    {
        name: 'OneGpio Raspberry Pi Pico',
        extensionId: 'onegpioRpiPico',
        collaborator: 'Mr. Y\'s Lab',
		iconURL: require('../extensions/onegpioRpiPico/onegpioRpiPico.png'),
	    insetIconURL: require('../extensions/onegpioRpiPico/onegpioRpiPico-small.png'),
        description: 'onegpioRpiPico',
        tags: ['preload'],
        featured: true,
        internetConnectionRequired: true,
        bluetoothRequired: false,
        helpLink: 'https://mryslab.github.io/s3-extend/',
        incompatibleWithScratch: true

    },
	//Champierre
	{
        name: 'ChatGPT2Scratch',
        extensionId: 'chatgpt2scratch',
		iconURL: require('../extensions/chatgpt2scratch/chatgpt2scratch.png'),
	    insetIconURL: require('../extensions/chatgpt2scratch/chatgpt2scratch-small.png'),
        collaborator: 'ichiroc',
        featured: true,
        bluetoothRequired: false,
        internetConnectionRequired: true,
        tags: ['preload', 'ai'],
        description: 'Interact with ChatGPT in Scratch!',
        featured: true,
        incompatibleWithScratch: true
    },
    {
        name: 'ML2Scratch',
        extensionId: 'ml2scratch',
		iconURL: require('../extensions/ml2scratch/ml2scratch.png'),
	    insetIconURL: require('../extensions/ml2scratch/ml2scratch-small.png'),
		collaborator: 'champierre',
        featured: true,
        bluetoothRequired: false,
        internetConnectionRequired: true,
        tags: ['preload', 'ai'],
        description: 'Lets you train with Machine Learning blocks.',
        featured: true,
        incompatibleWithScratch: true
    },
    {
        name: 'TM2Scratch',
        extensionId: 'tm2scratch',
        iconURL: require('../extensions/tm2scratch/tm2scratch.png'),
	    insetIconURL: require('../extensions/tmpose2scratch/tmpose2scratch.png'),
		collaborator: 'Tsukurusha, YengawaLab and Google',
        featured: true,
        bluetoothRequired: false,
        internetConnectionRequired: true,
        tags: ['preload', 'ai'],
        description: 'Lets you train with images and audio.',
        featured: true,
        incompatibleWithScratch: true
    },
    {
        name: 'TMPose2Scratch',
        extensionId: 'tmpose2scratch',
        iconURL: require('../extensions/tmpose2scratch/tmpose2scratch.png'),
	    insetIconURL: require('../extensions/tmpose2scratch/tmpose2scratch-small.png'),
		collaborator: 'champierre',
        featured: true,
        bluetoothRequired: false,
        internetConnectionRequired: true,
        tags: ['preload', 'ai'],
        description: 'Lets you train with poses.',
        featured: true,
        incompatibleWithScratch: true
    },
    {
        name: 'HandPose2Scratch',
        extensionId: 'handpose2scratch',
        collaborator: 'champierre',
        description: 'Hand tracking in Scratch.',
        iconURL: require('../extensions/handpose2scratch/handpose2scratch.png'),
	    insetIconURL: require('../extensions/handpose2scratch/handpose2scratch-small.png'),
        tags: ['preload', 'ai'],
        internetConnectionRequired: true,
        featured: true,
        incompatibleWithScratch: true
    },	
    {
        name: 'Posenet2Scratch',
        extensionId: 'posenet2scratch',
        iconURL: require('../extensions/posenet2scratch/posenet2scratch.png'),
	    insetIconURL: require('../extensions/posenet2scratch/posenet2scratch-small.png'),
        collaborator: 'champierre',
        featured: true,
        bluetoothRequired: false,
        internetConnectionRequired: true,
        tags: ['preload', 'ai'],
        description: 'Detect human poses quickly and accurately with a normal WebCam without using a special device',
        featured: true,
        incompatibleWithScratch: true
    },
    {
        name: 'Facemesh2scratch',
        extensionId: 'facemesh2scratch',
        iconURL: require('../extensions/facemesh2scratch/facemesh2scratch.png'),
	    insetIconURL: require('../extensions/facemesh2scratch/facemesh2scratch-small.png'),
        collaborator: 'champierre',
        internetConnectionRequired: true,
        tags: ['preload', 'ai'],
        description: 'Use facetracking in your projects!',
        featured: true,
        incompatibleWithScratch: true
    },
    {
        name: 'Scratch2WebSerialAPI',
        extensionId: 'scratch2webserialapi',
        iconURL: require('../extensions/scratch2webserialapi/scratch2webserialapi.png'),
	    insetIconURL: require('../extensions/scratch2webserialapi/scratch2webserialapi-small.png'),
        collaborator: 'champierre',
        internetConnectionRequired: true,
        tags: ['preload', 'iot'],
        description: 'Do more complex things with hardware via the serial ports.',
        featured: true,
        incompatibleWithScratch: true
    },
    {
        name: 'ImageClassifer2Scratch',
        extensionId: 'ic2scratch',
        iconURL: require('../extensions/ic2scratch/ic2scratch.png'),
	    insetIconURL: require('../extensions/ic2scratch/ic2scratch-small.png'),
        collaborator: 'champierre',
        internetConnectionRequired: true,
        tags: ['preload', 'ai'],
        description: 'Image Classification Blocks.',
        featured: true,
        incompatibleWithScratch: true
    },
	{
        name: 'scratch2maqueen',
        extensionId: 'scratch2maqueen', // update reference once file names are updated
        tags: ['preload'],
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: true,
        iconURL: require('../extensions/scratch2maqueen/scratch2maqueen.png'),
	    insetIconURL: require('../extensions/scratch2maqueen/scratch2maqueen-small.png'),
        description: 'Control DFRobot Maqueen.',
        featured: true,
        collaborator: 'Vernier',
        incompatibleWithScratch: true
    },
	//Adacraft
	{
        name: 'Adacraft HTTP',
        extensionId: 'adahttp',
        tags: ['other', 'preload'],
        iconURL: require('../extensions/adacraft/http.png'),
	    insetIconURL: require('../extensions/adacraft/http-small.svg'),
        description: 'Some new blocks to send HTTP requests ad manage results.',
        collaborator: 'Adacraft',
        featured: true,
        incompatibleWithScratch: true
    },
    {
        name: 'Adacraft GIF',
        extensionId: 'gif',
        tags: ['other', 'preload'],
        iconURL: require('../extensions/adacraft/gif.png'),
	    insetIconURL: require('../extensions/adacraft/gif-small.svg'),
        description: 'Some new blocks to encode GIF files.',
        collaborator: 'Adacraft',
        featured: true,
        incompatibleWithScratch: true
    },
{
        name: 'Ada Browser',
        tags: ['other', 'preload'],
        extensionId: 'adabrowser',
        iconURL: require('../extensions/adacraft/browser.png'),
	    insetIconURL: require('../extensions/adacraft/browser-small.svg'),
        description: 'Some new blocks to interact with the browser',
        collaborator: 'Adacraft',
        featured: true,
        incompatibleWithScratch: true
    },
	
	//GvbvdxxMod Preloads
	{
        name: 'Roku',
        extensionId: 'roku',
        internetConnectionRequired: true,
        collaborator: 'Gvbvdxx',
		iconURL: require('../extensions/roku/big.jpg'),
	    insetIconURL: require('../extensions/roku/small.png'),
		customInsetColor: '#FFFFFF',
        tags: ['other', 'preload'],
        description: 'Interact with your Roku tv via the GM2Helper software!',
        featured: true,
        incompatibleWithScratch: true
    },
	{
        name: 'HTML5 Elements',
        extensionId: 'html5',
		iconURL: require('../extensions/html5/small.svg'),
	    insetIconURL: require('../extensions/html5/large.svg'),
        description: 'Create HTMl5 elements. Display sprite costumes out of the stage!',
        featured: true,
        collaborator: 'Gvbvdxx',
        tags: ['other', 'preload'],
        incompatibleWithScratch: true
    },
{
        name: 'Gvbvdxx Extras',
        extensionId: 'extra',
		iconURL: require('../extensions/potentiamod/placeholder.png'),
        description: 'Unfinished Gvbvdxx Mod Helper App.',
        featured: true,
        collaborator: 'Gvbvdxx',
        tags: ['other', 'preload'],
        incompatibleWithScratch: true
    },
{
        name: 'Website API',
        extensionId: 'websites',
		iconURL: require('../extensions/websites/websites.png'),
	    insetIconURL: require('../extensions/websites/small.png'),
		customInsetColor: '#FFFFFF',
        description: 'Website API',
        featured: true,
        collaborator: 'Gvbvdxx',
        tags: ['other', 'preload'],
        incompatibleWithScratch: true
    },
	{
        name: 'NES Emulator',
        extensionId: 'nesemulator', // update reference once file names are updated
		iconURL: require('../extensions/nes_emulator/nes.svg'),
	    insetIconURL: require('../extensions/nes_emulator/nes-small.svg'),
		customInsetColor: '#E80000',
        description: 'Use the power of the NES emulation in PotentiaMod!',
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: false,
        bluetoothRequired: false,
        tags: ['other', 'preload'],
        featured: true,
        collaborator: 'Gvbvdxx',
        incompatibleWithScratch: true
    },
	//PenguinMod Preloads
	 {
        name: 'Prism',
        extensionId: 'jgPrism',
        tags: ['other', 'preload'],
        iconURL: require('../extensions/penguinmod/extensions/prism.png'),
		insetIconURL: require('../extensions/icons/penguinmod.svg'),
		customInsetColor: '#00c3ff',
		collaborator: 'PenguinMod',
        description: 'Blocks for specific use-cases or major convenience.',
        featured: true,
        incompatibleWithScratch: true
    },
	{
        name: 'Scratch Authentication',
        extensionId: 'jgScratchAuthenticate',
        iconURL: require('./penguinmod/extensions/scratchauth2.svg'),
		insetIconURL: require('../extensions/icons/penguinmod.svg'),
		customInsetColor: '#00c3ff',
		collaborator: 'PenguinMod',
		tags: ['other', 'preload'],
        description: "Interact with Scratch Authentication to prove the player is a real scratch user.",
        featured: true,
        incompatibleWithScratch: true
    },
	//Builders
	{
        name: 'KittenBot Extension Maker',
        href: 'https://kittenbot.github.io/scratch3-extension/',
        extensionId: 'kittenBotExtensionMaker',
		iconURL: require('../extensions/extension-builders/KittenBot.png'),
        description: 'Create extensions with KittenBot!',
        tags: ['other', 'builders'],
        featured: true
    },
	{
        name: 'GaiaMod Extension Editor',
        href: 'https://gaiamod-main.github.io/Extension-Editor/',
        extensionId: 'GMExtEditor',
		iconURL: require('../extensions/extension-builders/GaiaExtEditor.svg'),
	    insetIconURL: require('../extensions/extension-builders/GaiaExtEditor-small.svg'),
        description: 'Either create or edit extensions with a modfication of Astra Editor Extension Editor.',
        tags: ['gaia', 'builders'],
        isNew: false,
        featured: true,
    },
    {
        name: 'ExtForge',
        href: 'https://jwklong.github.io/extforge',
        extensionId: 'extforge',
        iconURL: require('../extensions/extension-builders/extforge.svg'),
        description: 'Create extensions with a block-based UI.',
        collaborator: 'jwklong',
        tags: ['other', 'builders'],
        featured: true
    },
    {
        name: 'TurboBuilder',
        href: 'https://turbobuilder.vercel.app/',
        extensionId: 'turboBuilder',
        iconURL: require('../extensions/extension-builders/turbobuilder.png'),
        description: 'Create your own amazing extensions using a scratch-based UI!',
        collaborator: 'Started by JeremyGamer13, continued by jwklong',
        tags: ['tw', 'builders'],
        featured: true
    },
	//More Ext Galleries besides ones
	{
        name: 'Former VM Extension Collection',
        href: 'https://gaiawindwave90.github.io/VM-to-JS-Extensions/?originSpecial=true',
        extensionId: 'VMExtLibrary',
        iconURL: require('../extensions/potentiamod/vm_library.svg'),
        description: 'Tons of extensions converted from built-ins.\n\nClick on an extension to add it to your project.',
        collaborator: 'Listed in the site',
        tags: ['collections'],
        featured: true
    },
    {
        name: 'Pen Group Extension Gallery',
        extensionId: 'pengroup_gallery',
        href: 'https://pen-group.github.io/extensions/',
        iconURL: require('./icons/placeholder.svg'),
        description: 'Pen+ extensions and addons archived by the Pen Group.',
        featured: true,
        tags: ['collections']
    },
	//Turbo
    {
        name: (
            <FormattedMessage
                defaultMessage="TurboWarp Blocks"
                description="Name of the strange 'TurboWarp  Blocks' extension"
                id="tw.twExtension.name"
                values={{
                    APP_NAME
                }}
            />
        ),
        extensionId: 'tw',
        iconURL: require('../extensions/tw/tw.svg'),
		insetIconURL: require('../extensions/icons/turbowarp.svg'),
		customInsetColor: '#ff4d4d',
        description: (
            <FormattedMessage
                defaultMessage="Weird new blocks, with more modifications by GaiaWindWave90."
                description="Description of the strange 'TurboWarp  Blocks' extension"
                id="tw.twExtension.description"
            />
        ),
        tags: ['tw'],
        featured: true,
        incompatibleWithScratch: true
    },
	{
        name: (
            <FormattedMessage
                defaultMessage="PotentiaMod Blocks"
                description="Name of the 'PotentiaMod  Blocks' extension"
                id="tw.potExtension.name"
                values={{
                    APP_NAME
                }}
            />
        ),
        extensionId: 'potentia',
        iconURL: require('../extensions/potentiamod/pot.svg'),
		insetIconURL: require('../extensions/icons/potentiamod.svg'),
		customInsetColor: '#4800CC',
		isNew: true,
        description: (
            <FormattedMessage
                defaultMessage="A collection of useful, PotentiaMod-exclusive blocks."
                description="Description of the 'PotentiaMod Blocks' extension"
                id="tw.potExtension.description"
            />
        ),
        tags: ['potentia', 'new'],
        featured: true,
        incompatibleWithScratch: true
    },
];


// PenguinMod / TurboWarp community extensions added from the requested list.
const requestedCommunityExtensions = [
    { name: "Motion Expansion", extensionId: "pmMotionExpansion", iconURL: require('../extensions/penguinmod/extensions/motion_expanded.png'), tags: ["penguinmod", "categoryexpansion"], description: "More small motion blocks for movement or collision.", featured: true },
    { name: "Stage Camera", extensionId: "pmCamera", iconURL: require('../extensions/penguinmod/extensions/camera.png'), tags: ["penguinmod"], description: "Allows the camera to move around anywhere on the stage.", featured: true },
    { name: "Resolution", extensionId: "https://extensions.penguinmod.com/extensions/DogeisCut/Resolution.js", iconURL: require('../extensions/penguinmod/extensions/resolution.png'), tags: ["penguinmod", "graphics"], description: "Provides utility blocks that simplify the creation of projects with dynamic resolution support.", featured: true },
    { name: "Sound Systems", extensionId: "jgExtendedAudio", iconURL: require('../extensions/penguinmod/extensions/extended_audio.png'), tags: ["penguinmod", "categoryexpansion", "noisemaker"], description: "An audio grouping system for more intensive audio work.", featured: true },
    { name: "Beat Sync", extensionId: "https://extensions.penguinmod.com/extensions/Gen1x/beat_sync.js", iconURL: require('../extensions/penguinmod/extensions/beat_sync.png'), tags: ["penguinmod"], description: "An extension designed to let you sync anything in your project to a musical beat, with incredible precision.", featured: true },
    { name: "TurboSynth", extensionId: "https://extensions.penguinmod.com/extensions/NishiOwO/turbosynth.js", iconURL: require('../extensions/penguinmod/extensions/turbosynth.png'), tags: ["penguinmod", "noisemaker"], description: "Synthesizer that uses TurboSynth.", featured: true },
    { name: "Events Expansion", extensionId: "pmEventsExpansion", iconURL: require('../extensions/penguinmod/extensions/events_expanded.png'), tags: ["penguinmod", "categoryexpansion"], description: "More events for sending & receiving information, notifying specific sprites or better control when things should happen.", featured: true },
    { name: "Controls Expansion", extensionId: "pmControlsExpansion", iconURL: require('../extensions/penguinmod/extensions/controls_expanded.png'), tags: ["penguinmod", "categoryexpansion"], description: "More control blocks for animations, complex systems or cleaner one-time use blocks.", featured: true },
    { name: "Sensing Expansion", extensionId: "pmSensingExpansion", iconURL: require('../extensions/penguinmod/extensions/sensing_expanded.png'), tags: ["penguinmod", "categoryexpansion"], description: "More sensing blocks for specific use cases or interacting with the user's device.", featured: true },
    { name: "Operators Expansion", extensionId: "pmOperatorsExpansion", iconURL: require('../extensions/penguinmod/extensions/operators_expanded.png'), tags: ["penguinmod", "categoryexpansion", "math"], description: "More operators like nand, nor, character code to character, and reading multiple lined text line by line.", featured: true },
    { name: "Custom Styles", extensionId: "shovelcss", iconURL: require('../extensions/penguinmod/extensions/shovelcss.png'), tags: ["penguinmod", "graphics"], description: "Customize the appearance of variable monitors and prompts in your project.", featured: true },
    { name: "ODE", extensionId: "https://extensions.penguinmod.com/extensions/NishiOwO/ode.js", iconURL: require('../extensions/penguinmod/extensions/ode.png'), tags: ["penguinmod", "3d"], description: "3D physics using ODE.", featured: true },
    { name: "Tweening", extensionId: "jgTween", iconURL: require('../extensions/penguinmod/extensions/tween.png'), tags: ["penguinmod"], description: "Smoothly animating values using different easing functions and directions.", featured: true },
    { name: "Tailgating", extensionId: "jgTailgating", iconURL: require('../extensions/penguinmod/extensions/tailgating.png'), tags: ["penguinmod"], description: "Have sprites & clones follow behind other sprites & clones by an offset, like RPG party members.", featured: true },
    { name: "Canvas Effects", extensionId: "theshovelcanvaseffects", iconURL: require('../extensions/penguinmod/extensions/canvas_effects.png'), tags: ["penguinmod", "graphics"], description: "Apply visual effects to the entire stage.", featured: true },
    { name: "Lighting", extensionId: "https://extensions.penguinmod.com/extensions/Gen1x/lighting.js", iconURL: require('../extensions/penguinmod/extensions/lighting.png'), tags: ["penguinmod", "graphics"], description: "A fast, powerful and easy-to-use lighting engine powered by WebGL!", featured: true },
    { name: "Multiple Timers", extensionId: "jgTimers", iconURL: require('../extensions/penguinmod/extensions/timers.png'), tags: ["penguinmod"], description: "Create different timers you can control separately.", featured: true },
    { name: "Temporary Variables", extensionId: "tempVars", iconURL: require('../extensions/penguinmod/extensions/temp_vars.png'), tags: ["penguinmod"], description: "Create temporary variables for use in one block stack.", featured: true },
    { name: "Runtime Modifications", extensionId: "jgRuntime", iconURL: require('../extensions/penguinmod/extensions/runtime.svg'), tags: ["penguinmod"], description: "Blocks for updating Scratch objects like the stage and sprites.", featured: true },
    { name: "Storage", extensionId: "jgStorage", iconURL: require('../extensions/penguinmod/extensions/storage.png'), tags: ["penguinmod", "datamgmt"], description: "Store data after PenguinMod has already been closed out. Basic Server Storage is also included.", featured: true },
    { name: "CloudLink", extensionId: "https://extensions.penguinmod.com/extensions/MikeDev101/cloudlink.js", iconURL: require('../extensions/penguinmod/extensions/cloudlink.png'), tags: ["turbowarp", "penguinmod"], description: "A powerful WebSocket extension for Scratch.", featured: true },
    { name: "Scripts", extensionId: "jgScripts", iconURL: require('../extensions/penguinmod/extensions/scripts.png'), tags: ["penguinmod", "datamgmt"], description: "Create compiled scripts with blocks while the project is running.", featured: true },
    { name: "Pang API", extensionId: "https://extensions.penguinmod.com/extensions/SammerLOL/pangapi.js", iconURL: require('../extensions/penguinmod/extensions/pang.png'), tags: ["penguinmod"], description: "Fetch information from the PenguinMod API.", featured: true },
    { name: "3D Math", extensionId: "https://extensions.penguinmod.com/extensions/ObviousAlexC/3DMath.js", iconURL: require('../extensions/penguinmod/extensions/3d_math.png'), tags: ["penguinmod", "3d", "graphics", "math"], description: "A handful of utilities for making your own sprite-based 3D engine.", featured: true },
    { name: "Random Utilities", extensionId: "https://extensions.penguinmod.com/extensions/Gen1x/random_utils.js", iconURL: require('../extensions/penguinmod/extensions/random_utils.png'), tags: ["penguinmod"], description: "Utilities for generating random values, UUIDs, random strings, and more.", featured: true },
    { name: "LZ Compress", extensionId: "shovellzcompresss", iconURL: require('../extensions/penguinmod/extensions/lz_compress.png'), tags: ["penguinmod", "datamgmt"], description: "Compress and decompress text using lz-string.", featured: true },
    { name: "HTML iframe Elements", extensionId: "jgIframe", iconURL: require('../extensions/penguinmod/extensions/iframe.png'), tags: ["penguinmod"], description: "Blocks to place and move around frames that contain HTML content or websites.", featured: true },
    { name: "Labels", extensionId: "jwProto", iconURL: require('../extensions/penguinmod/extensions/labels.png'), tags: ["penguinmod"], description: "Labelling and Placeholders.", featured: true },
    { name: "Perlin Noise", extensionId: "iygPerlin", iconURL: require('../extensions/penguinmod/extensions/perlin.png'), tags: ["penguinmod"], description: "Blocks for generating and using Perlin noise. Good for generating terrain, clouds, and other things.", featured: true },
    { name: "JavaScript", extensionId: "SPjavascriptV2", iconURL: require('../extensions/penguinmod/extensions/javascript.png'), tags: ["penguinmod", "programminglanguage"], description: "Run your own custom code written in JavaScript!", featured: true },
    { name: "Arrays", extensionId: "jwArray", iconURL: require('../extensions/penguinmod/extensions/arrays.png'), tags: ["penguinmod", "datamgmt"], description: "Store data efficiently in multi-purpose arrays.", featured: true },
    { name: "Array Buffers", extensionId: "https://extensions.penguinmod.com/extensions/AndrewGaming587/agBuffer.js", iconURL: require('../extensions/penguinmod/extensions/array_buffers.png'), tags: ["penguinmod", "datamgmt"], description: "Read, parse, and write raw data efficiently using Array Buffers", featured: true },
    { name: "Objects", extensionId: "https://extensions.penguinmod.com/extensions/DogeisCut/dogeiscutObject.js", iconURL: require('../extensions/penguinmod/extensions/objects.png'), tags: ["penguinmod", "datamgmt"], description: "Store data efficiently in multi-purpose objects.", featured: true },
    { name: "Sets", extensionId: "https://extensions.penguinmod.com/extensions/DogeisCut/dogeiscutSet.js", iconURL: require('../extensions/penguinmod/extensions/sets.png'), tags: ["penguinmod", "datamgmt"], description: "Store non-repeating, unordered data super efficiently in sets.", featured: true },
    { name: "XML", extensionId: "jwXML", iconURL: require('../extensions/penguinmod/extensions/xml.png'), tags: ["penguinmod", "datamgmt"], description: "Creating, parsing and modifying XML data.", featured: true },
    { name: "Targets", extensionId: "jwTargets", iconURL: require('../extensions/penguinmod/extensions/targets.png'), tags: ["penguinmod"], description: "Direct access to sprites and their clones.", featured: true },
    { name: "Infinity", extensionId: "jwNum", iconURL: require('../extensions/penguinmod/extensions/infinity.png'), tags: ["penguinmod", "math"], description: "Advanced number type capable of really big numbers.", featured: true },
    { name: "Color", extensionId: "jwColor", iconURL: require('../extensions/penguinmod/extensions/color.png'), tags: ["penguinmod", "graphics"], description: "Utilities for anything involving colors.", featured: true },
    { name: "Vector", extensionId: "jwVector", iconURL: require('../extensions/penguinmod/extensions/vector.png'), tags: ["penguinmod", "math"], description: "Vector type for calculating with X and Y coordinates.", featured: true },
    { name: "3D Vectors & Quaternions", extensionId: "https://extensions.penguinmod.com/extensions/Div/divVecQuat.js", iconURL: require('../extensions/penguinmod/extensions/vec_quat.png'), tags: ["penguinmod", "3d", "datamgmt", "math"], description: "Perform 3D Math and Rotations with Vectors and Quaternions", featured: true },
    { name: "Lambda", extensionId: "jwLambda", iconURL: require('../extensions/penguinmod/extensions/lambda.png'), tags: ["penguinmod"], description: "Create anonymous functions with arguments and execute them.", featured: true },
    { name: "Scope", extensionId: "jwScope", iconURL: require('../extensions/penguinmod/extensions/scope.png'), tags: ["penguinmod"], description: "Temporary variables based on block stack.", featured: true },
    { name: "Pointers", extensionId: "jwPointer", iconURL: require('../extensions/penguinmod/extensions/pointers.png'), tags: ["penguinmod", "datamgmt"], description: "Define references to values.", featured: true },
    { name: "Integers", extensionId: "jwInt", iconURL: require('../extensions/penguinmod/extensions/integers.png'), tags: ["penguinmod", "math"], description: "Large integers with zero precision loss.", featured: true },
    { name: "Iterators", extensionId: "https://extensions.penguinmod.com/extensions/Div/divIterators.js", iconURL: require('../extensions/penguinmod/extensions/iterators.png'), tags: ["penguinmod", "datamgmt"], description: "Transform and iterate over different types of collections and more.", featured: true },
    { name: "Regular Expressions", extensionId: "https://extensions.penguinmod.com/extensions/DogeisCut/dogeiscutRegularExpressions.js", iconURL: require('../extensions/penguinmod/extensions/regular_expressions.png'), tags: ["penguinmod"], description: "Create, modify, filter, and more with the new regular expression type.", featured: true },
    { name: "Date Format", extensionId: "https://extensions.penguinmod.com/extensions/ddededodediamante/dateFormatV2.js", iconURL: require('../extensions/penguinmod/extensions/date_format.png'), tags: ["penguinmod", "datamgmt"], description: "Manage, format and compare dates.", featured: true },
    { name: "Device Motion", extensionId: "https://extensions.penguinmod.com/extensions/gaimerI17/DeviceMotion.js", iconURL: require('../extensions/penguinmod/extensions/device_motion.png'), tags: ["penguinmod", "hardware"], description: "Use Device Motion API to get rotation or movement of the device.", featured: true },
    { name: "MIDI Controller", extensionId: "https://extensions.penguinmod.com/extensions/electricfuzzball_pm/MIDI.js", iconURL: require('../extensions/penguinmod/extensions/midi.png'), tags: ["penguinmod", "hardware"], description: "Use a MIDI keyboard to interact with projects!", featured: true },
	{ name: "Temporary lists", extensionId: "https://picreatoragain.github.io/piextensions.github.io/temporarylists.js", iconURL: require('../extensions/penguinmod/extensions/midi.png'), tags: ["preload"], description: "Use a MIDI keyboard to interact with projects!", featured: true },
];

// Keep existing entries and skip IDs already present in the library.
const existingExtensionIds = new Set(menuItems.map(item => item.extensionId));
requestedCommunityExtensions.forEach(extension => {
    if (!existingExtensionIds.has(extension.extensionId)) {
        menuItems.push(extension);
        existingExtensionIds.add(extension.extensionId);
    }
});

const gallerySourceDisplay = {
    potentiamod: {
        name: 'PotentiaMod Extension Gallery',
        href: 'https://potentiamod.github.io/pot-extensions/',
        iconURL: require('../extensions/gallery/potentiamod.svg'),
        tag: 'collections'
    },
	 gaiamod: {
        name: 'GaiaMod Extension Gallery',
        href: 'https://gaiawindwave90.github.io/gm-extensions/',
        iconURL: require('../extensions/gallery/gaiamod.png'),
        tag: 'collections'
    },
    turbowarp: {
        name: 'TurboWarp Extension Gallery',
        href: 'https://extensions.turbowarp.org/',
        iconURL: require('../extensions/gallery/turbowarp.svg'),
        tag: 'collections'
    }
};

const createGalleryStatusItem = (sourceId, description) => {
    const source = gallerySourceDisplay[sourceId];
    return {
        name: source.name,
        href: source.href,
        extensionId: `gallery_${sourceId}`,
        iconURL: source.iconURL,
        description,
        tags: [source.tag],
        featured: true
    };
};

export const galleryStatusItems = {
	potentiamod: {
        loading: createGalleryStatusItem('potentiamod', 'Loading PotentiaMod extension gallery...'),
        more: createGalleryStatusItem('potentiamod', 'See some user-submitted extensions.'),
        error: createGalleryStatusItem('potentiamod', 'Error loading PotentiaMod extension gallery.')
    },
    gaiamod: {
        loading: createGalleryStatusItem('gaiamod', 'Loading GaiaMod extension gallery...'),
        more: createGalleryStatusItem('gaiamod', 'See some user-submitted extensions.'),
        error: createGalleryStatusItem('gaiamod', 'Error loading GaiaMod extension gallery.')
    },
    turbowarp: {
        loading: createGalleryStatusItem('turbowarp', 'Loading TurboWarp extension gallery...'),
        more: createGalleryStatusItem('turbowarp', 'Learn more about extensions at extensions.turbowarp.org.'),
        error: createGalleryStatusItem('turbowarp', 'Error loading TurboWarp extension gallery. Visit extensions.turbowarp.org to find more extensions.')
    }
};

/*
----------------------------------------------
### NOTE TO POTENTIAMOD FORKS: ###
Please DO NOT make the extensions below accessible in the editor without livetests!
They are NOT fully developed for people to use and create full projects with!

These extensions could have missing features, cause random errors, broken projects, or even crash the editor!
Moving these into the main extension list will cause people who use your fork to assume they are ready for them to use!

Please keep these in livetests to reduce bug reports on your fork! :)

This was copied from PenguinMod.
----------------------------------------------
*/
if (IsLocal || IsLiveTests) {
const livetests = [
	{
        name: 'Test Extension',
        extensionId: 'test',
        iconURL: require('../extensions/potentiamod/placeholder.png'),
        tags: ['potentia', 'preload', 'dev'],
        description: 'A test extension to see if possible. For developers only.',
        featured: true,
		extensionWarning: true
    },
	{
            name: 'Editor',
            href: 'https://potentiamod.github.io/editor.html',
            extensionId: 'gallery_potentiamodEditor',
            iconURL: require('../extensions/gallery/potentiamod.svg'),
			tags: ['potentia', 'preload', 'dev'],
            description: 'Opens the editor with this tab as the parent, still with the library opened. For developers.',
            featured: true
        },
        {
            name: 'localhost:8601',
            href: 'http://localhost:8601',
            extensionId: 'gallery_potentiamodLocalhost8601',
            iconURL: require('../extensions/potentiamod/placeholder.png'),
			tags: ['potentia', 'preload', 'dev'],
            description: 'Opens localhost:8601 in a new tab with this tab as the parent. For developers',
            featured: true
        },
		 {
        name: 'TurboBuilder - Dev Branch',
        href: 'https://dev-turbobuilder.vercel.app/',
        extensionId: 'turboBuilderDev',
        iconURL: require('../extensions/extension-builders/turbobuilder-dev.png'),
        description: 'Publicly available developer branch, with the latest features.',
        collaborator: 'Started by JeremyGamer13, continued by jwklong',
        tags: ['tw', 'builders', 'dev'],
        featured: true
    },
];
livetests.forEach(ext => {
        menuItems.push(ext);
    });
}


export default menuItems;
